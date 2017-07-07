import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './src/pages/home';
import Login from './src/pages/login';
import Firebase from 'firebase';
import Blank from './src/Blank';

// let app = new Firebase("https://dashboard-343f9.firebaseio.com");

const Route = StackNavigator(
    {   
        Login: { screen: Login },
        Home: { screen:Home },
        Blank: { screen: Blank}
    },
    {
    initialRouteName: 'Blank',
    headerMode: 'none', 
    mode: 'card',
    }
);

export default class App extends React.Component {

  constructor(props) {
    super(props);
   
  }

  

  render() {
    return (
      <Route />
    );
  }
}


