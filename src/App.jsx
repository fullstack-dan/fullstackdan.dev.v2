import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import './App.css';
import CustomNav from './Components/CustomNav';
import Footer from './Components/Footer';
import Home from './Components/Home';

export const APIContext = React.createContext();

function App() {
    const APIURL = import.meta.env.VITE_APP_API_URL;

    return (
        <>
            <APIContext.Provider value={APIURL}>
                <Router>
                    <CustomNav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<></>} />
                    </Routes>
                    <Footer />
                </Router>
            </APIContext.Provider>
        </>
    );
}

export default App;
