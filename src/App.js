import React, {useState} from 'react'
import './App.css'
import './firebase.js'
import Notify from './components/Notify/Notify'
import {getTokenProject} from './firebase'

function App() {

    const [isTokenFound, setTokenFound] = useState(false);
    getTokenProject(setTokenFound);

    return (
        <div className='container'>
            {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
            {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
            <Notify />
        </div>
    )
}

export default App
