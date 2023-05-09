import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Services } from './services/services';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  errorStyle: {
    color: 'red'
  }
});


const App = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [error, setError] = useState(false);
  //Promise will grab the first movie from the API and
  //set movieTitle to the title of that return.
  //useEffect makes sure that this process only occurs one time.
  useEffect(() => {
    Services().then(movie => {
    setMovieTitle(movie[0].original_title);
  }).catch(err => {setError(err)});
}, []);
  
  return (
    <View style={[styles.center, {top: 50}]}>
      {error ? <Text style={[styles.errorStyle]}>Error in the system</Text> : <Text>{movieTitle}</Text>}
    </View>
  );
};

export default App;