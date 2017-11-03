import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import reducers from './src/reducers';
import firebase from 'firebase';


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
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Text>Schedule Master</Text>
        </View>
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
