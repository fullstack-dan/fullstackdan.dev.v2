import React from 'react';
import './AboutPage.css';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className={'about-page'}>
            <h1>about me</h1>
            <p>
                Hey there! I&apos;m Daniel, a web developer based in Atlanta,
                GA. Thanks for visiting my site!
                <br />
                <br />I started my development journey in my senior year of high
                school with the help of the folks over at{' '}
                <a
                    href={'https://www.theodinproject.com/'}
                    target={'_blank'}
                    className={'link'}
                >
                    The Odin Project
                </a>
                . The best way to learn, however, is by doing, and that&apos;s
                exactly what I&apos;ve been doing for the past few years.
                <br />
                <br />
                I&apos;ve been coding for much longer than that though; one of
                my first ventures into computer science was sending prank
                Windows virus batch files to my friends in middle school.
                I&apos;ve come a long way since then, and recently I&apos;ve
                developed a passion for computer science education. My
                philosophy is simple; coding is fun, and more people should
                experience that fun.
                <br />
                <br />
                When I&apos;m not coding, I&apos;m usually playing video games
                or reading. You can check out my current read on my{' '}
                <a
                    href={
                        'https://www.goodreads.com/user/show/168037524-daniel'
                    }
                    target={'_blank'}
                    className={'link'}
                >
                    Goodreads
                </a>{' '}
                account.
                <br />
                <br />I love an excuse to drop whatever I&apos;m doing and pick
                up a project, so if you&apos;d like to work with me, feel free
                to reach out! Let&apos;s build something cool together.
            </p>
            <h2>
                <Link to={'/blog'} className={'link'}>
                    Read my blog!
                </Link>
            </h2>
        </div>
    );
};

export default AboutPage;
