import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, LogBox} from 'react-native';
import { GetPopularMovies, GetUpcomingMovies, GetPopularTVShows } from '../Services/Services';


const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  errorStyle: {
    color: 'red'
  }
});

interface Movie {
 original_title: string;
 original_language: string;
}
const HomeScreen = () => {
  LogBox.ignoreLogs(['Remote debugger']);
  const [movie, setMovie] = useState<Movie>({original_title: '', original_language: ''});
  const [error, setError] = useState(false);
  const [upcomingMovieTitle, setUpcomingMovieTitle] = useState('');


  //Promise will grab the first movie from the API and
  //set movieTitle to the title of that return.
  //useEffect makes sure that this process only occurs one time.
  useEffect(() => {
    GetPopularMovies().then(movie => {
    setMovie(movie[0]);
  }).catch(err => {setError(err)});
}, []);
  
  return (
    <View style={[styles.center, {top: 50}]}>
       <Text>Movie Name: {movie.original_title}</Text>
       <Text>Language: {movie.original_language}</Text>
       {error ? <Text style={[styles.errorStyle]}>Error in the system</Text> : <Text>{upcomingMovieTitle }</Text>}
    </View>
  );
};

export default HomeScreen;