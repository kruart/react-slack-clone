import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyCHurcRB5fQMIR_QJuSwSQJP-k3Xlcl9S8",
    authDomain: "reactjs-slack-clone.firebaseapp.com",
    databaseURL: "https://reactjs-slack-clone.firebaseio.com",
    projectId: "reactjs-slack-clone",
    storageBucket: "reactjs-slack-clone.appspot.com",
    messagingSenderId: "23039086711",
    appId: "1:23039086711:web:7c42eedc82c5508a"
};

firebase.initializeApp(firebaseConfig);

export default firebase;