import React, {useState} from 'react'
import './App.css'
import './firebase.js'
import Notify from './components/Notify/Notify'
import {getTokenProject} from './firebase'

function App() {

    const [isTokenFound, setTokenFound] = useState(false);
    getTokenProject(setTokenFound);

    // onMessageListener().then(payload => {
    //     // setShow(true);
    //     // setNotification({title: payload.notification.title, body: payload.notification.body})
    //     console.log(payload);
    // }).catch(err => console.log('failed: ', err));
    return (
        <div className='container'>
            update2
            {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
            {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
            <Notify />
        </div>
    )
}

export default App
