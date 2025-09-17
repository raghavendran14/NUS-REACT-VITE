import React, { useEffect, useState } from "react";
import ProfileViewer from "./ProfileViewer";
import { Link, Outlet } from "react-router-dom";


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


function ProfilesList() {
    const [searchTerm, setSearchTerm] = useState("");

    // useEffect(() => {
    //     console.log("ProfilesList component mounted");

    //     return () => {
    //         console.log("ProfilesList component unmounted");
    //     };
    // }, [])
    return (
        <div>
            <div>
                <h1>NUS User Profile demo</h1>
                <button>
                    <Link to="/profiles/controlledComponent">Go to Controlled Component</Link>
                </button>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Search profiles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ height: "40px", width: "300px", fontSize: "16px", marginBottom: "20px" }}
                />
            </div>

            <div className="profiles-row">
                {profiles
                    .filter((profile) =>
                        profile.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((profile, index) => (
                        <ProfileViewer
                            key={index}
                            image={profile.image}
                            name={profile.name}
                            age={profile.age}
                            gender={profile.gender}
                            profile={profile}
                        />
                    ))}

            </div>
        </div>
    );
}

export default ProfilesList;
