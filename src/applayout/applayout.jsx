import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar";
import Home from "../pages/Home/home.jsx";
import Contact from "../pages/contact/contact";
import Products from "../pages/Products/products";
import About from "../pages/about/about";
 

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