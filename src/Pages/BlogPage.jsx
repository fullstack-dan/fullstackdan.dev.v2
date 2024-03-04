import React from 'react';
import './BlogPage.css';

import PostList from '../Components/PostList';

const BlogPage = () => {
    const [range, setRange] = React.useState([0, 5]);
    return (
        <div className={'blog-page'}>
            <h1>All Blogs</h1>
            <div className="posts-display">
                <PostList range={range} asc={false} />
                <div className={'pagination-btns'}>
                    <button
                        disabled={range[0] === 0}
                        onClick={() => {
                            setRange([range[0] - 5, range[1] - 5]);
                        }}
                    >
                        Prev
                    </button>
                    <button
                        onClick={() => {
                            setRange([range[0] + 5, range[1] + 5]);
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
