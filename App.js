import React { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <View style={styles.container}>
          <Text>Redux Manager Scheduling App</Text>
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
