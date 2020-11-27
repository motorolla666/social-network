export type DialogType = {
    id:number
    name:string
}
export type MessageType = {
    id:number
    message:string
}
export type DialogsPageType  ={
    dialogs:Array<DialogType>
    messages: Array<MessageType>
}

export type PostType = {
    id:number
    message:string
    likesCount:string
}
export type ProfilePageType = {
    posts: Array<PostType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}



let state:StateType = {
    profilePage: {
        posts : [
            {id:1,message:'Hi, how are you !!?',likesCount:"25 likes"},
            {id:2,message:'It\'s my post !!?',likesCount:"15 likes"}
        ]
    },
    dialogsPage:{
        dialogs : [
            {id: 1, name: "Valera"},
            {id: 2, name: "Viktor"},
            {id: 3, name: "Dimas"},
            {id: 4, name: "Artsyom"},
            {id: 5, name: "Bob"},
            {id: 6, name: "Vector"},
            {id: 7, name: "Sasha"}
        ],
        messages : [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo!"}
        ]
    }
}

export default state