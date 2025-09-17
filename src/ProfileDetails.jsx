import React from "react";
import { useLocation, useParams, Link, Outlet } from "react-router-dom";

const profiles = [
    {
        id: 1,
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "John Doe",
        age: 28,
        gender: "Male",
    },
    {
        id: 2,
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        name: "Jane Smith",
        age: 25,
        gender: "Female",
    },
    {
        id: 3,
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        name: "Michael Brown",
        age: 30,
        gender: "Male",
    },
    {
        id: 4,
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        name: "Michael Brown",
        age: 30,
        gender: "Male",
    },
];

function ProfileDetails() {
    // const { id } = useParams(); // get profile id from URL
    // console.log("id --", id);

    const location = useLocation();
    const profile = location.state.profile || {};

    // const profile = profiles.find((p) => p.id.toString() === id);
    console.log("profile --", location.state.profile);

    if (!location.state.profile) {
        return <h2>Profile not found</h2>;
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>{profile.name}'s Details</h2>
            <img src={profile.image} alt={profile.name} />
            <p style={{ color: "#1a1a1a" }}>Age: {profile.age}</p>
            <p style={{ color: "#1a1a1a" }}>Gender: {profile.gender}</p>
            <Link to="/profiles">Back to Home</Link>
        </div>
    );
}

export default ProfileDetails;
