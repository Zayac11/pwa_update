import React from 'react'
import logo from '../../assets/logo.png'

const Notify = () => {
    navigator.setAppBadge(42).then(() => {
        console.log("The badge was added");
    }).catch(e => {
        console.error("Error displaying the badge", e);
    });
    return (
        <div>
            nothing
            <button>alo</button>
        </div>
    )
}

export default Notify