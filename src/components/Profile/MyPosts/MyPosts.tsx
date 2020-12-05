import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {PostType} from "../../../Redux/state";

type MyPostsPropsType = {
    MyPosts: Array<PostType>
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.MyPosts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.addPost(text)
            newPostElement.current.value = ""
        }
    }

    return <div className={s.postBlock}>
        <h3>My post</h3>
        <div>
            <div><textarea ref={newPostElement}></textarea></div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}


