import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import ReduxThunk from 'redux-thunk';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDTbesnS9_gTVsGBWVBe1fz-hDgvxPU6k8',
      authDomain: 'manage-b486e.firebaseapp.com',
      databaseURL: 'https://manage-b486e.firebaseio.com',
      projectId: 'manage-b486e',
      storageBucket: 'manage-b486e.appspot.com',
      messagingSenderId: '933343990113'
    };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
