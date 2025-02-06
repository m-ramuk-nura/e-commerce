import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/contact/contact";
import Products from "../pages/Products/products";

function AppLayout() {
    return(
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact'element={<Contact/>}/>
                    <Route path='/product' element={<Products/>} />
                    <Route path='/about' element={<About />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default AppLayout;