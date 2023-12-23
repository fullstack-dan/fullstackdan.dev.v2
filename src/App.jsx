import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import './App.css';
import CustomNav from './Components/CustomNav';
import Home from './Components/Home';

function App() {
    return (
        <>
            <Router>
                <CustomNav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<></>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
