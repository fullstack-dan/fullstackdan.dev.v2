import React, { useState, useEffect } from "react";
import PostList from "./PostList";
import "./Home.css";

const Home = () => {
  const [text, setText] = useState("");
  const [playAnim, setPlayAnim] = useState(true);
  const helloWorld = "hello world";
  const startDelay = 2000;

  useEffect(() => {
    if (localStorage.getItem("typewriterPlayed") != "true") {
      setPlayAnim(true);
      const timeouts = [];

      const startTimeout = setTimeout(() => {
        helloWorld.split("").forEach((char, index) => {
          let timeout = setTimeout(() => {
            setText((prevText) => prevText + char);
          }, 100 * index);
          timeouts.push(timeout);
        });
      }, startDelay);

      localStorage.setItem("typewriterPlayed", "true");

      return () => {
        clearTimeout(startTimeout);
        timeouts.forEach(clearTimeout);
      };
    } else {
      setText(helloWorld);
      setPlayAnim(false);
    }
  }, []);

  return (
    <main>
      <div className="intro">
        <h1 className="typewriter">
          {text}
          <span className="cursor"></span>
        </h1>
        <div>
          <h2 className={playAnim ? "play-anim" : ""}>
            I'm Daniel. Welcome to my corner of the internet.
          </h2>
          <h2 className={playAnim ? "play-anim" : ""}>
            Check out my latest post.
          </h2>
        </div>
      </div>
      <PostList />
    </main>
  );
};

export default Home;
