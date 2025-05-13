// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PostList from '../Components/PostList.jsx';
import './Home.css';
import Intro from '../Components/Intro.jsx';

const Home = () => {
    const [playAnim, setPlayAnim] = useState(false);
    return (
        <>
            <Intro />
            <div className={playAnim ? 'play-anim' : ''}>
                <PostList range={[0, 3]} asc={false} />
            </div>
        </>
    );
};

export default Home;
