import React, {Component} from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Switch
} from "react-native";
import {Icon} from 'native-base';

import Button from "apsl-react-native-button";
import * as firebase from "firebase";
import {Hideo} from "react-native-textinput-effects";

import CommonStyle from "../components/styles.css";
import DismissKeyboard from "dismissKeyboard";

export default class Home extends Component {

     static navigationOptions = {
        title: 'Welcome',
    };

    constructor(props) {
        super(props);

        this.state = {
            uid: "",
            mobile: "",
            mobileForm: "",
            switchValue1: false,
            switchValue2: true
        };

        this.logout = this.logout.bind(this);
        // this.saveMobile = this.saveMobile.bind(this);

    }

    async logout() {
        
        console.log("logout")
        try {

            await firebase.auth().signOut();
            const { navigate } = this.props.navigation;
            navigate('Login', { name: 'Jane' })

        } catch (error) {
            console.log(error);
        }

    }

    // logout() {
        
    //     console.log("logout")
        
    //         const { navigate } = this.props.navigation;
    //         navigate('Login', { name: 'Jane' })
     

    // }

    toggleSwitch1 = (value) => this.setState({ switchValue2: value })

    toggleSwitch2 = (value) => this.setState({ switchValue2: value })

    

    render() {

        return (
            <View style={{flex: 1, marginTop: 30, backgroundColor: 'white'}}>
                <View style={{flex: 2, alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: '#ccc'}}>
                    <Text style={{fontSize: 20}}>Dashboard</Text>
                </View>
                <View style={{flex: 1, padding: 10, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 2, borderBottomColor: '#ddd'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={{width: 30, height: 30}} source={require('../Img/light.jpg')} />
                        <Text style={{fontSize: 15, marginLeft: 10, marginTop: 5}}>Light1</Text>
                    </View>
                    <Switch onValueChange = {this.toggleSwitch1} value = {this.state.switchValue1}/>
                </View>
                <View style={{flex: 1, padding: 10, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 2, borderBottomColor: '#ddd'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={{width: 30, height: 30}} source={require('../Img/light.jpg')} />
                        <Text style={{fontSize: 15, marginLeft: 10, marginTop: 5}}>Light2</Text>
                    </View>
                    <Switch onValueChange = {this.toggleSwitch2} value = {this.state.switchValue2}/>
                </View>
                <View style={{flex: 1, padding: 10, flexDirection: 'row', justifyContent: 'space-between' , borderBottomWidth: 2, borderBottomColor: '#ddd'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={{width: 30, height: 30}} source={require('../Img/temp.png')} />
                        <Text style={{fontSize: 15, marginLeft: 10, marginTop: 5}}>AC</Text>
                    </View>
                    <Text style={{fontSize: 15}}>78</Text>
                </View>
                <View style={{flex: 1,padding: 10, borderBottomWidth: 2, borderBottomColor: '#ddd' }} />
                <View style={{flex: 10, justifyContent: 'center', alignItems:'center'}}>
                    <TouchableOpacity onPress={this.logout}>
                        <Text style={{fontSize: 20}}>Log Out</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 2, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 30, paddingRight: 30}}>
                    <Icon name="star" />
                    <Icon name="cloud" />
                    <Icon name="alarm" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    heading: {
        textAlign: "center"
    },

    logout: {
        padding: 50
    },

    form: {
        paddingTop: 50
    }

});

