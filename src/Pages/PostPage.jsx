import React from 'react';
import './PostPage.css';
import { Link, useParams } from 'react-router-dom';
import { APIContext } from '../App.jsx';
import ReactMarkdown from 'react-markdown';

const PostPage = () => {
    const postId = useParams().id;
    const APIURL = React.useContext(APIContext);

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        fetch(`${APIURL}/blogs/${postId}`)
            .then((response) => response.json())
            .then((data) => {
                setPost(data);
            })
            .catch((error) => {
                console.error('Error fetching post', error);
            });
    }, [APIURL, postId]);

    return (
        <div className={'post-page'}>
            <div className="quick-nav">
                <Link to={'/blog'} className={'link'}>
                    {'<- '}all blogs
                </Link>
            </div>
            {post ? (
                <div className="post">
                    <h1>{post.title}</h1>
                    <h2>{post.author}</h2>
                    <h3>{post.createdAt.split('T')[0]}</h3>
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            ) : (
                <div>Nothing to see here...</div>
            )}
        </div>
    );
};

export default PostPage;
