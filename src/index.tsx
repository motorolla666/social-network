import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type DialogsType = {
    id:number
    name:string
}
export type MessagesType = {
    id:number
    message:string
}

export type PostType = {
    id:number
    message:string
    likesCount:string
}

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

let posts = [
    {id:1,message:'Hi, how are you !!?',likesCount:"25 likes"},
    {id:2,message:'It\'s my post !!?',likesCount:"15 likes"}
]


ReactDOM.render( <App posts={posts} dialogs={dialogs} messages={messages}/>,document.getElementById('root'));

