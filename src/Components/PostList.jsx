import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './PostList.css';

import { APIContext } from '../App.jsx';

// eslint-disable-next-line react/prop-types
const PostList = React.memo(({ range }) => {
    const [posts, setPosts] = useState(null);
    const APIURL = React.useContext(APIContext);

    useEffect(() => {
        fetch(`${APIURL}/blogs`)
            .then((response) => response.json())
            .then((data) => {
                setPosts(data.blogs);
            })
            .catch((error) => {
                setPosts(['ERROR']);
                console.error('Error fetching posts', error);
            });
    }, [APIURL, range]);

    return (
        <>
            {posts ? (
                posts[0] !== 'ERROR' ? (
                    <div className="blog-posts">
                        {posts.slice(range[0], range[1]).map((post) => (
                            <PostPreview key={post._id} post={post} />
                        ))}
                    </div>
                ) : (
                    <h1 className="posts-error">
                        Posts aren&apos;t loading right now. Please try again
                        later!
                    </h1>
                )
            ) : (
                loadingPosts()
            )}
        </>
    );
});

const loadingPosts = () => {
    return (
        <h1 className="loading-posts">
            Loading posts<span className="dots"></span>
        </h1>
    );
};

const PostPreview = ({ post }) => {
    const { title, author, description, _id, createdAt } = post;
    const date = createdAt.split('T')[0];
    return (
        <div className="blog-post">
            <div className="blog-info">
                <Link key={post._id} to={`/blog/${post._id}`}>
                    <h1>{title}</h1>
                </Link>
                <div className="blog-extra-info">
                    <h2>{description}</h2>
                    <h2>{author}</h2>
                    <h2>{date}</h2>
                    <div className="blog-tags">
                        {/* Tags can be rendered here if they are available in the post object */}
                    </div>
                </div>
            </div>
            <div className="blog-number">
                [{_id.toString().padStart(2, '0')}]
            </div>
        </div>
    );
};

export default PostList;
