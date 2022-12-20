import AppLoader from "./components/loader/Loader";
import { Route, Routes, useParams } from "react-router-dom";
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

  const params = useParams()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const { name } = useSelector((store) => store.profile)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

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
      const data = await res.json()
      dispatch({ type: types.ADD_PROFILE, payload: { id: data.id, name: data.name}})
      dispatch({ type: types.ADD_SUPERTOPICS, supertopics})
      const topics = supertopics.find((el) => el.tema === params.name).Topics
      dispatch({ type: types.ADD_TOPICS, topics})
    })()
  }, [])

  return (
    <>
      <Navbar/>
        <div className="container">
      { name ? (
          <Routes>
            <Route index element={isLoading ? <AppLoader/> : <SupertopicList/>}/>
            <Route path="/game/:name" element={<TopicList/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/profile/:name" element={<Profile/>}/>
            <Route path="/raiting" element={<OverallRating/>}/>
          </Routes>
      ) : (
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
        </Routes>
      ) }
        </div>
    </>

  );
}

export default App;
