import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        firebase.initializeApp({
            apiKey: "AIzaSyAi3C3nHGH-bgXMpqXDFlBiAOikxyaazrE",
            authDomain: "dashboard-343f9.firebaseapp.com",
            databaseURL: "https://dashboard-343f9.firebaseio.com",
            storageBucket: "dashboard-343f9.appspot.com"
        });
    }

}

module.exports = Firebase;