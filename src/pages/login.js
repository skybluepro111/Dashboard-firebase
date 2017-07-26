import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage,
  dismissKeyboard,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

// import Button from '../components/button';


import * as firebase from "firebase";
import Button from "apsl-react-native-button";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import {Sae} from "react-native-textinput-effects";
import DismissKeyboard from "dismissKeyboard";
import { Constants, Facebook, Google, MapView } from 'expo';
import CommonStyle from "../components/styles.css";

export default class Login extends Component {
    static navigationOptions = {
        title: 'Welcome',
    }; 

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            response: ""
        };

        this.signup = this.signup.bind(this);
        this.login = this.login.bind(this);
    }

    async signup() {
         const { navigate } = this.props.navigation;
        DismissKeyboard();

        try {
            await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);

            this.setState({
                response: "account created"
            });

            setTimeout(() => {
                navigate('Home', { name: 'Jane' })
                
            }, 1500);

        } catch (error) {
            this.setState({
                response: error.toString()
            })
        }

    }

    async login() {
         const { navigate } = this.props.navigation;
        DismissKeyboard();

        try {
            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);

            this.setState({
                response: "Logged In!"
            });

            setTimeout(() => {
                navigate('Home', { name: 'Jane' })
            }, 1500);

        } catch (error) {
            this.setState({
                response: error.toString()
            })
        }

    }

     _handleFacebookLogin = async () => {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '142475749635054', // Replace with your own app id in standalone app
        { permissions: ['public_profile'] }
      );

      switch (type) {
        case 'success': {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          const profile = await response.json();
          Alert.alert(
            'Logged in!',
            `Hi ${profile.name}!`,
          );
          break;
        }
        case 'cancel': {
          Alert.alert(
            'Cancelled!',
            'Login was cancelled!',
          );
          break;
        }
        default: {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
      }
    } catch (e) {
      Alert.alert(
        'Oops!',
        'Login failed!',
      );
    }
  };

    render() {

        return (
            <TouchableWithoutFeedback onPress={() => {DismissKeyboard()}}>
                <View style={CommonStyle.container}>
                    <View style={styles.formGroup}>
                        <Text style={styles.title}>BEMOSS</Text>
                         <View style ={{justifyContent: 'center', alignItems: 'center', marginTop:60}}><Image style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}} source={require('../Img/BEMOSS_logo.png')} /></View>
                       
                         <View style ={{justifyContent: 'center', alignItems: 'center', marginTop:30}}>
                            <TextInput style={{borderColor: 'gray',borderWidth:1, height:40}}
                                placeholder="user name"
                                onChangeText={(email) => this.setState({email})}
                            
                                />
                        </View>
                        <View style ={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>

                            <TextInput style={{borderWidth:1, borderColor: 'gray',height:40}}
                                placeholder="password"
                                onChangeText={(password) => this.setState({password})}
                                password={true}    />
                        </View>
                        <MapView
                            style={{ alignSelf: 'stretch', height: 200 }}
                            region={this.state.mapRegion}
                            onRegionChange={this._handleMapRegionChange}
                            />

                        <View style={styles.submit}>
                             <Button    title="Login with Facebook"   onPress={this._handleFacebookLogin}
        />
                            <Button onPress={this.signup} style={CommonStyle.buttons} textStyle={{fontSize: 18}}>
                                Sign up
                            </Button>
                            <Button onPress={this.login} style={styles.buttons} textStyle={{fontSize: 18}}>
                                Login
                            </Button>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.response}>{this.state.response}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({

    formGroup: {
        padding: 50
    },

    title: {
        paddingBottom: 16,
        textAlign: "center",
        color: "#000",
        fontSize: 35,
        fontWeight: "bold",
        opacity: 0.8,
        borderBottomWidth: 2, 
        borderBottomColor: '#ddd'
    },

    submit: {
        paddingTop: 30
    },

    response: {
        textAlign: "center",
        paddingTop: 0,
        padding: 50
    }
});

