import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { StyleSheet, View } from 'react-native';
import reducers from './src/reducers';
import Router from './src/Router';
import LoginForm from './src/components/LoginForm';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDTbesnS9_gTVsGBWVBe1fz-hDgvxPU6k8',
      authDomain: 'manage-b486e.firebaseapp.com',
      databaseURL: 'https://manage-b486e.firebaseio.com',
      projectId: 'manage-b486e',
      storageBucket: 'manage-b486e.appspot.com',
      messagingSenderId: '933343990113',
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
});

export default App;
