
import { Suspense, lazy } from 'react';
import './App.css'
// import ProfilesList from './Component/ProfileList'

// import ProfileDetails from './ProfileDetails';
// import ControlledForm from './ControlledForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load main pages
const Home = lazy(() => import("./Pages/Home"));
const ProfilesList = lazy(() => import("./Component/ProfileList"));
const ProfileDetails = lazy(() => import("./ProfileDetails"));
const ProfilesLayout = lazy(() => import("./Pages/ProfilesLayout"));
const ControlledForm = lazy(() => import("./ControlledForm"));


function App() {

  // return (
  //   <div>
  //     <Routes>
  //       <Route path="/" element={<ProfilesList />} />
  //       <Route path="/profile/:id" element={<ProfileDetails />} />
  //       <Route path="/controlledComponent" element={<ControlledForm />} />
  //     </Routes>
  //   </div>
  // )

  return (
    <div>
      {/* Suspense shows fallback until component is loaded */}

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Nested route for Profiles */}
        <Route path="/profiles" element={<ProfilesLayout />}>

          {/* default child route = list */}
          <Route index element={<ProfilesList />} />
          <Route
            path=":id"
            element={
              <Suspense fallback={<p>Loading profile details...</p>}>
                <ProfileDetails />
              </Suspense>
            }
          />
          {/* <Route
            path="controlledComponent"
            element={
              <Suspense fallback={<p>Loading controlled form...</p>}>
                <ControlledForm />
              </Suspense>
            }
          /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
