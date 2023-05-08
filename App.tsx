import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import axios from 'axios';
import { useEffect } from 'react';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});

type GreetingProps = {
  name: string;
};


const GetData = async () =>
{
  const url:string = 'https://api.themoviedb.org/3/movie/popular?api_key=c19e6fff2c0692083ad7640cecadab90'
  const resp = await axios.get(url);
  console.log(JSON.stringify(resp.data.results[0], null, 2));
}

const Greeting = (props: GreetingProps) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
};

const LotsOfGreetings = () => {
  GetData()
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting name="Rexxar" />
      <Greeting name="Jaina" />
      <Greeting name="Valeera" />
    </View>
  );
};

export default LotsOfGreetings;