import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Home/signup";
import Contact from "./pages/Home/contact";
import Ourmenu from "./pages/Home/Ourmenu";
import Login from "./pages/Home/login";
<<<<<<< HEAD
import Addtocart from "./pages/Home/addtocart";
=======
>>>>>>> 8c99ca416ac5eb6f7617a7ba941ffd713b451083

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/menu" element={<Ourmenu/>} />
<<<<<<< HEAD
        <Route path="/addtocart" element={<Addtocart/>} />
=======
>>>>>>> 8c99ca416ac5eb6f7617a7ba941ffd713b451083
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
