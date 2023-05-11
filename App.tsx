import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, LogBox} from 'react-native';
import { GetPopularMovies, GetUpcomingMovies, GetPopularTVShows } from './services/services';


const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  errorStyle: {
    color: 'red'
  }
});


const App = () => {
  LogBox.ignoreLogs(['Remote debugger']);
  const [movieTitle, setMovieTitle] = useState('');
  const [error, setError] = useState(false);
  const [upcomingMovieTitle, setUpcomingMovieTitle] = useState('');


  //Promise will grab the first movie from the API and
  //set movieTitle to the title of that return.
  //useEffect makes sure that this process only occurs one time.
  useEffect(() => {
    GetUpcomingMovies().then(movie => {
    setUpcomingMovieTitle(movie[0].original_title);
  }).catch(err => {setError(err)});
}, []);
  
  return (
    <View style={[styles.center, {top: 50}]}>
      {error ? <Text style={[styles.errorStyle]}>Error in the system</Text> : <Text>{upcomingMovieTitle }</Text>}
    </View>
  );
};

export default App;