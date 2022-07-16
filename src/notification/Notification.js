import { useState, createContext, useContext } from "react";
import './Notification.scss'

const Notification = ({message, severity}) => {

    if(message === '') return

    return(
        <div className={`notification ${severity || ''}`}>
            <span>{message}</span>
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {

    const [msgConfig, setMsgConfig] = useState({
        severity: 'success',
        message: ''
    })
    const setNotification = (sev, msg, timeout = 4000) => {
        setMsgConfig({severity: sev, message: msg })
        setTimeout(()=>{
            setMsgConfig({...msgConfig, message:''})
        }, timeout)
    }



    return(
        <NotificationContext.Provider value={setNotification} >
            <Notification message={msgConfig.message} severity={msgConfig.severity} /> 
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}