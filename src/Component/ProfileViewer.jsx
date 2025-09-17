import React from "react";
import "./ProfileViewer.css"; // import CSS file
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProfileViewer({ image, name, age, gender, profile }) {
    const navigate = useNavigate();

    return (
        <div className="profile-card">
            <img src={image} alt={name} className="profile-img" />
            <div>
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
            </div>
            {/* Navigate to Profile Details */}
            <button
                onClick={() => {
                    navigate(`/profiles/${profile.id}`, { state: { profile } });
                }}
            >View Profile</button>
            {/* <Link to={`/profiles/${profile.id}`}>View Profile</Link> */}
        </div>
    );
}

export default ProfileViewer;
