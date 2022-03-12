import React, {useEffect, useRef} from 'react'
import logo from '../../assets/logo.png'

const Notify = () => {
    // navigator.setAppBadge(42).then(() => {
    //     console.log("The badge was added");
    // }).catch(e => {
    //     console.log("Error displaying the badge");
    // });
    if ("Notification" in window) {
        // window.alert("The Notifications API is supported");
    }
    else {
        window.alert("The Notifications API isn't supported");
    }
    let button = useRef(null)
    if ('serviceWorker' in navigator) {
    }
    const listener = () => {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                window.alert("The user accepted");
            }
        });
    }
    // if (Notification.permission === "granted") {
    //     const notification = new Notification("ArtWay", {
    //         body: "Добавлена новая комната!",
    //         icon: logo,
    //     });
    // }
    const rightNow = () => {
        if (Notification.permission === "granted") {
            const options = {
                body: "Добавлена новая комнатаss!",
                icon: "/images/jason-leung-HM6TMmevbZQ-unsplash.jpg",
                vibrate: [200, 100, 200],
                tag: "new-product",
                image: logo,
                badge: "https://spyna.it/icons/android-icon-192x192.png",
                actions: [{ action: "Detail", title: "View", icon: logo }]
            }
            navigator.serviceWorker.ready.then(e => {debugger})
            debugger
            navigator.serviceWorker.ready.then(
                function (serviceWorker) {
                    serviceWorker.showNotification('ArtWay', options)
                        .then (e => {
                            debugger
                        })
                }
            )
            // const notification = new Notification("ArtWay", {
            //     body: "Добавлена новая комната!",
            //     icon: logo,
            // });
        }
    }
    const after = () => {
        setTimeout(() => {
            if (Notification.permission === "granted") {
                const notification = new Notification("ArtWay", {
                    body: "Добавлена новая комната спустя 5 секунд",
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