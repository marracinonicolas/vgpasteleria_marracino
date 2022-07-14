import { createContext } from "react";

const Notification = ({message, serverity}) => {

    const notificationStyle = {
        position : 'absolute',
        top : 100,
        right : 30,
        width : 'auto',
        height : 'auto',
        background : 'green',
        color : 'white',
        padding : '20px'
    }


    return(
        <div style={notificationStyle}>
            <span>mensaje</span>
        </div>
    )
}

const NotificationContext = createContext()
const NotificationProvider = ({children}) => {
    return
}

export default Notification