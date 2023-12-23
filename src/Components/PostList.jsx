import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./PostList.css";

const examplePosts = [
  {
    id: 1,
    title: "Post 1",
    description: "Subtitle 1",
    author: "daniel a.",
    date: "2021-01-01",
    tags: ["tag1", "tag2"],
    content: "This is the content of post 1",
  },
  {
    id: 2,
    title: "Post 2",
    description: "Subtitle 2",
    author: "daniel a.",
    date: "2021-01-02",
    tags: ["tag1", "tag2"],
    content: "This is the content of post 2",
  },
  {
    id: 3,
    title: "Post 3",
    description: "Subtitle 3",
    author: "daniel a.",
    date: "2021-01-03",
    tags: ["tag1", "tag2"],
    content: "This is the content of post 3",
  },
];

const PostList = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      // const response = await fetch("https://blog.fullstackdan.dev/posts");
      // const data = await response.json();
      // setPosts(data);
      setPosts(examplePosts);
    };
    getPosts();
  });

  return (
    <>
      {posts ? (
        <div className="post-list">
          {posts.map((post) => {
            return (
              <Link key={post.id} to={`/posts/${post.id}`}>
                <PostPreview post={post} />
              </Link>
            );
          })}
        </div>
      ) : (
        loadingPosts()
      )}
    </>
  );
};

const loadingPosts = () => {
  return (
    <h1 className="loading-posts">
      Loading posts...
      <span role="img" aria-label="loading">
        🔄
      </span>
    </h1>
  );
};

const PostPreview = ({ post }) => {
  const { title, author, description, id, date } = post;
  return (
    <div className="blog-post">
      <div className="blog-info">
        <h1>{title}</h1>
        <div className="blog-extra-info">
          <h2>{description}</h2>
          <h2>{author}</h2>
          <h2>{date}</h2>
          <div className="blog-tags">
            {/* Tags can be rendered here if they are available in the post object */}
          </div>
        </div>
      </div>
      <div className="blog-number">[{id.toString().padStart(2, "0")}]</div>
    </div>
  );
};

export default PostList;
