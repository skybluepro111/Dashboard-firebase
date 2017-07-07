import React, { Component } from 'react';

import {
  Text,
  View,
  AsyncStorage
} from 'react-native';

import * as firebase from "firebase";

import Home from "./pages/home";
import Login from "./pages/login";
import Firebase from "./firebase/firebase";

export default class Blank extends Component {

  static navigationOptions = {
        title: 'Welcome',
    };      

  constructor(props) {
    super(props);

    Firebase.initialise();

    this.getInitialView();

    this.state = {
      userLoaded: false,
      initialView: null
    };

    this.getInitialView = this.getInitialView.bind(this);

  }

  getInitialView() {

    firebase.auth().onAuthStateChanged((user) => {

      let initialView = user ? "Home" : "Login";

      this.setState({
        userLoaded: true,
        initialView: initialView
      })
    });


  }

render() {
    const { navigate } = this.props.navigation;
     return (
          <View>
          {this.state.userLoaded ? navigate(this.state.initialView, { name: 'Jane' }) : <View></View>}
          </View>
     )
}
}