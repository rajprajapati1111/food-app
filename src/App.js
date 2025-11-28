import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Home/signup";
import Contact from "./pages/Home/contact";
import Ourmenu from "./pages/Home/Ourmenu";
import Login from "./pages/Home/login";
import Addtocart from "./pages/Home/addtocart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/menu" element={<Ourmenu/>} />
        <Route path="/addtocart" element={<Addtocart/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
