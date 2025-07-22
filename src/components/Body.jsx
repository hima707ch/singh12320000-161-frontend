import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx"
import HomePage from "./HomePage/Body.jsx";
import PropertyListingPage from "./PropertyListingPage/Body.jsx";

const Body = () => {
    return (
        <Router>
        <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/propertylistingpage" element={<PropertyListingPage />} />
            </Routes>
        </Router>
    );
};

export default Body;