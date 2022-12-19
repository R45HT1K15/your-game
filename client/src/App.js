import AppLoader from "./components/loader/Loader";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as types from './store/types'
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import Navbar from "./components/navbar/Navbar";
import SupertopicList from "./components/Supertopics/SupertopicList"
import { useEffect, useState } from "react";
import TopicList from "./components/Topics/Topics";
import Profile from "./components/pages/Profile";
import OverallRating from "./components/pages/OverallRating";

function App() {

  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3100/check',{
        method: 'GET',
        credentials: 'include'
      })
      const response = await fetch('http://localhost:3100/', {
        method: 'GET',
        credentials: 'include',
      })
      const supertopics = await response.json()
      console.log('topics-----------', supertopics)
      const data = await res.json()
      dispatch({ type: types.ADD_PROFILE, payload: { id: data.id, name: data.name}})
      dispatch({ type: types.ADD_SUPERTOPICS, supertopics})
    })()
  })

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
