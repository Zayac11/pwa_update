import React, {useEffect, useRef} from 'react'
import logo from '../../assets/logo.png'

const Notify = () => {
    navigator.setAppBadge(42).then(() => {
        window.alert("The badge was added");
    }).catch(e => {
        window.alert("Error displaying the badge");
    });
    if ("Notification" in window) {
        window.alert("The Notifications API is supported");
    }
    else {
        window.alert("The Notifications API isn't supported");
    }
    let button = useRef(null)
    const listener = () => {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                window.alert("The user accepted");
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
    const rightNow = () => {
        if (Notification.permission === "granted") {
            const notification = new Notification("ArtWay", {
                body: "Добавлена новая комната!",
                icon: logo,
            });
        }
    }
    const after = () => {
        setTimeout(() => {
            if (Notification.permission === "granted") {
                const notification = new Notification("ArtWay", {
                    body: "Добавлена новая комната!",
                    icon: logo,
                });
            }
        }, 5000)
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
            <div>
                <button onClick={() => rightNow()}>right now</button>
            </div>
            <div>
                <button onClick={() => after()}>after 5 sec</button>
            </div>
        </div>
    )
}

export default Notify