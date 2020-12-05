import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../Redux/state";

type DialogsPropsType ={
    dialogsPage:DialogsPageType
}

const Dialogs = (props:DialogsPropsType) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    const newMessage = React.createRef<HTMLTextAreaElement>()

    const addMessage = () =>{
    const text = newMessage.current?.value
        alert(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>{dialogsElements}</div>
            <div className={s.messages}>{messagesElements}</div>
            <textarea ref={newMessage}></textarea>
            <button onClick={addMessage}>Sent</button>
        </div>
    )
}
export default Dialogs