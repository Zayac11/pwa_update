// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyD1m73HH4RCztpFmT9uxN8s46HW1wwmc6Q",
    authDomain: "notify-test-a992c.firebaseapp.com",
    projectId: "notify-test-a992c",
    storageBucket: "notify-test-a992c.appspot.com",
    messagingSenderId: "328813344088",
    appId: "1:328813344088:web:752699eb65b01eeffb212d",
    // measurementId: "G-799H92E7C0"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log("Received background message ", payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
})