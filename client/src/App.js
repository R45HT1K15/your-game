import AppLoader from "./components/loader/Loader";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import Navbar from "./components/navbar/Navbar";
import SupertopicList from "./components/Supertopics/SupertopicList"
import { useState } from "react";
import TopicList from "./components/Topics/Topics";
import Profile from "./components/pages/Profile";
import OverallRating from "./components/pages/OverallRating";

function App() {

  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route index element={isLoading ? <AppLoader/> : <SupertopicList/>}/>
          <Route path="/game/:name" element={<TopicList/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/profile/:name" element={<Profile/>}/>
          <Route path="/raiting" element={<OverallRating/>}/>
        </Routes>
      </div>
    </>

  );
}

export default App;
