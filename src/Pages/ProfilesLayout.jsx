import { Link, Outlet } from "react-router-dom";

// Layout just provides the wrapper + <Outlet />
function ProfilesLayout() {
    return (
        <div>
            {/* <h1>NUS User Profile Demo</h1> */}
            <Outlet />
        </div>
    );
}


export default ProfilesLayout