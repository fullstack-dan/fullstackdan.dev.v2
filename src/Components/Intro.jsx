import React from 'react';
import { useState, useEffect } from 'react';
import './Intro.css';

const Intro = () => {
    const [text, setText] = useState('');
    const [playAnim, setPlayAnim] = useState(true);
    const helloWorld = 'hello world';
    const startDelay = 2000;

    /**
     * Hello world anim
     */
    useEffect(() => {
        function runHelloAnim() {
            if (localStorage.getItem('typewriterPlayed') !== 'true') {
                setPlayAnim(true);
                const timeouts = [];

                const startTimeout = setTimeout(() => {
                    helloWorld.split('').forEach((char, index) => {
                        let timeout = setTimeout(() => {
                            setText((prevText) => prevText + char);
                        }, 100 * index);
                        timeouts.push(timeout);
                    });
                }, startDelay);

                localStorage.setItem('typewriterPlayed', 'true');

                return () => {
                    clearTimeout(startTimeout);
                    timeouts.forEach(clearTimeout);
                };
            } else {
                setText(helloWorld);
                setPlayAnim(false);
            }
        }

        runHelloAnim();
    }, []);

    return (
        <div className="mb-8">
            <div className="flex px-8 items-center justify-center gap-4 flex-col-reverse md:flex-row">
                {/* <div className="flex-1 justify-center flex items-center">
                    <img
                        src="../../public/profile.png"
                        className="rounded-full object-cover w-64 h-64"
                        alt="placeholder"
                    />
                </div> */}
                <div className="flex-1 justify-center flex items-center w-full">
                    <div className="track-card-wrapper">
                        <div className="offset-box"></div>
                        <div className="track-card flex justify-center">
                            <img
                                src="../../profile.png"
                                className="object-cover w-full"
                                alt="placeholder"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                    <h1 className={`text-2xl font-bold typewriter`}>
                        {text}
                        <span className="cursor"></span>
                    </h1>
                    <h2
                        className={`text-xl font-bold ${
                            playAnim ? 'play-anim' : ''
                        }`}
                    >
                        I'm Daniel.
                    </h2>
                    <p className={`text-sm ${playAnim ? 'play-anim' : ''}`}>
                        Welcome to my corner of the Internet! I'm a software
                        engineer with a passion for building web applications. I
                        use web development to solve real-world problems and
                        create meaningful experiences. I use code to express my
                        creativity and bring ideas to life.
                    </p>
                    <p className={`text-sm ${playAnim ? 'play-anim' : ''}`}>
                        Feel free to check out my blog below or my portfolio
                        above!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Intro;
