import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import CustomNav from './Components/CustomNav';
import Footer from './Components/Footer';
import Home from './Pages/Home.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import BlogPage from './Pages/BlogPage.jsx';
import PostPage from './Pages/PostPage.jsx';

export const APIContext = React.createContext();

function App() {
    const APIURL = import.meta.env.VITE_APP_API_URL;

    return (
        <>
            <APIContext.Provider value={APIURL}>
                <Router>
                    <CustomNav />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/blog/:id" element={<PostPage />} />
                        </Routes>
                    </main>
                    <Footer />
                </Router>
            </APIContext.Provider>
        </>
    );
}

export default App;
