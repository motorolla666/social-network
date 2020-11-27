import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./PropfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
}

const Profile = (props: ProfilePropsType) => {
    return <div>

        <ProfileInfo/>
        <MyPosts MyPosts={props.profilePage.posts}/>

    </div>
}
export default Profile

