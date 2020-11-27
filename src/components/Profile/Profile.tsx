import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PropfileInfo/ProfileInfo";
import {PostType} from "../../index";

type ProfilePropsType = {
    posts: Array<PostType>
}

const Profile = (props: ProfilePropsType) => {
    return <div>

        <ProfileInfo/>
        <MyPosts posts={props.posts}/>

    </div>
}
export default Profile

