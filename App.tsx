import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, LogBox} from 'react-native';
import HomeScreen from './Screens/HomeScreen';



const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  errorStyle: {
    color: 'red'
  }
});


const App = () => {

  
  return (
    <View style={[styles.center, {top: 50}]}>
      <HomeScreen />
    </View>
  );
};

export default App;