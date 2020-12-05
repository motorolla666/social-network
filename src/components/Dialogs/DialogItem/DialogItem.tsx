import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./DialogItem.module.css"

type DialogItemType = {
    name: string
    id: number
}


const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id
    return <div className={s.item}>
        <img src="https://images2.fanpop.com/images/photos/2700000/fdrf-giant-monsters-2772543-225-195.jpg" alt="2"/>
            <div className={s.dialog}><NavLink to={path}>{props.name}</NavLink></div>
    </div>

}



export default DialogItem