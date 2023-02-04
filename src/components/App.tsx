import React from "react";
import Home from "./home/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./home/Header";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element = { <Home/> } />
            </Routes>
        </>
    );
}

export default App;
