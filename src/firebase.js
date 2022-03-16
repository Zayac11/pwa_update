// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getToken, onMessage, getMessaging} from 'firebase/messaging';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1m73HH4RCztpFmT9uxN8s46HW1wwmc6Q",
    authDomain: "notify-test-a992c.firebaseapp.com",
    projectId: "notify-test-a992c",
    storageBucket: "notify-test-a992c.appspot.com",
    messagingSenderId: "328813344088",
    appId: "1:328813344088:web:752699eb65b01eeffb212d",
    measurementId: "G-799H92E7C0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging()

export const getTokenProject = (setTokenFound) => {
    return getToken(messaging,{vapidKey: 'BDGYA-Pd4RQl-w12n5U9HArh0bO4q5ai3j3AR_1VX813-dbaAiu5VJCv03Pohb4xcC0K4-57m6JDax6jchGkhA8'}).then((currentToken) => {
        if (currentToken) {
            console.log('current token for client: ', currentToken);
            setTokenFound(true);
            // Track the token -> client mapping, by sending to backend server
            // show on the UI that permission is secured
        } else {
            console.log('No registration token available. Request permission to generate one.');
            setTokenFound(false);
            // shows on the UI that permission is required
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // catch error while creating client token
    })
}

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });