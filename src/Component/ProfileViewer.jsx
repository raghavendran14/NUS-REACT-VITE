import React from "react";
import "./ProfileViewer.css"; // import CSS file

function ProfileViewer({ image, name, age, gender }) {
    return (
        <div className="profile-card">
            <img src={image} alt={name} className="profile-img" />
            <div>
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
            </div>
        </div>
    );
}

export default ProfileViewer;
