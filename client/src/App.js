import AppLoader from "./components/loader/Loader";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import Navbar from "./components/navbar/Navbar";


function App() {

  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          {}
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
        </Routes>
      </div>
    </>

  );
}

export default App;
