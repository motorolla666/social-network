import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./PropfileInfo/ProfileInfo";
import {addPost, ProfilePageType} from "../../Redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage:string) => void
}

const Profile = (props: ProfilePropsType) => {
    return <div>

        <ProfileInfo/>
        <MyPosts
            MyPosts={props.profilePage.posts}
            addPost ={props.addPost}
        />

    </div>
}
export default Profile

