import "./app.scss"
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom"

const App = () => {
  const user = true;
  return (<Router>
    <Routes>

      <Route path="/" element={user ? <Home/> : <Navigate to="/register"/>}></Route>

      <Route path="/register" element={!user ? <Register/> : <Navigate to="/"/>}> </Route>

      <Route path="/login" element={!user ? <Login/> : <Navigate to="/"/>}> </Route>

      <Route path="/movies" element={<Home type="movies" />}></Route>

      <Route path="/series" element={<Home type="series" />}></Route>

      <Route path="/watch" element={<Watch />}></Route>

    </Routes>
  </Router>)
};

export default App;
