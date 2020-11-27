import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {PostType} from "../../../Redux/state";

type MyPostsPropsType ={
    MyPosts:Array<PostType>
}

const MyPosts = (props:MyPostsPropsType) => {

    let postsElements = props.MyPosts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount} /> )

    return <div className={s.postBlock}>
        <h3>My post</h3>
        <div>
            <div><textarea></textarea></div>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

}
export default MyPosts

