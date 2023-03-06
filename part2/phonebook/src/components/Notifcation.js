import React from "react";

const Notification = ({notification}) => {
    if (notification.message===null) {
        return null
    }

    return (

        <div className= {notification.isError ? "error" : "success"}>{notification.message}</div>
    )

}

export default Notification