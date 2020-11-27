import React from 'react';
import s from './ProfileInfo.module.css'

type ProfileInfoType = {}

const ProfileInfo = (props:ProfileInfoType) => {
    return <div>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLbtNaRgp1T9_XYMX06gNUBYh0gjVUjzAgJQ&usqp=CAU"
            alt="2"/>

        <div className={s.descriptionBlock}> ava+description</div>
    </div>
}
export default ProfileInfo

