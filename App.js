import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () =>  {
    return (
      <View style={styles.container}>
        <Text>Manager Scheduling App</Text>
      </View>
    );
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
