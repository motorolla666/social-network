import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./Dialogs.module.css"

type DialogItemType = {
    name: string
    id: string
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name="Valera" id="1"/>
                <DialogItem name="Viktor" id="2"/>
                <DialogItem name="Dimas" id="3"/>
                <DialogItem name="Artsyom" id="4"/>
                <DialogItem name="Bob" id="5"/>
                <DialogItem name="Vector" id="6"/>
                <DialogItem name="Sasha" id="7"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Yo"/>
                <Message message="YoYoyo!!"/>
            </div>

        </div>
    )
}
export default Dialogs