// pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Dashboard</h1>
            <button onClick={() => navigate("/profiles")}>Go to Profiles</button>
            <br /><br />
            <button onClick={() => alert("Future Feature!")}>
                Another Feature
            </button>
        </div>
    );
}

export default Home;
