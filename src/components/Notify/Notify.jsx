import React, {useEffect, useRef} from 'react'
import logo from '../../assets/logo.png'

const Notify = () => {
    navigator.setAppBadge(42).then(() => {
        console.log("The badge was added");
    }).catch(e => {
        console.error("Error displaying the badge", e);
    });
    if ("Notification" in window) {
        console.log("The Notifications API is supported");
    }
    let button = useRef(null)
    const listener = () => {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                console.log("The user accepted");
                const notification = new Notification("Hello World!");
            }
        });
    }
    if (Notification.permission === "granted") {
        const notification = new Notification("ArtWay", {
            body: "Добавлена новая комната!",
            icon: logo,
        });
    }
    useEffect(() => {
        button.current.addEventListener("click", listener);

        return () => {
            button.current.removeEventListener("click", listener);
        }
    })
    return (
        <div>
            nothing
            <button ref={button}>alo</button>
        </div>
    )
}

export default Notify