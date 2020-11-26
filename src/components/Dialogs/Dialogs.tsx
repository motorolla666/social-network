import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./Dialogs.module.css"

type DialogItemType = {
    name: string
    id: number
}

type MessageType = {
    message: string
}

const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id
    return <div className={s.dialog}><NavLink to={path}>{props.name}</NavLink></div>
}

const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>

}

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Valera"},
        {id: 2, name: "Viktor"},
        {id: 3, name: "Dimas"},
        {id: 4, name: "Artsyom"},
        {id: 5, name: "Bob"},
        {id: 6, name: "Vector"},
        {id: 7, name: "Sasha"}
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo!"}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>{dialogsElements}</div>
            <div className={s.messages}>{messagesElements}</div>
        </div>
    )
}
export default Dialogs