import React from "react";


let Profile = (props) => {
    return (
        <>
            <div>
                <img src={props.userData.photos.large} alt=""/>
            </div>
            <div>{props.userData.fullName}</div>
            <div>{props.userData.aboutMe}</div>
        </>
    )
}

export default Profile;