import React from 'react';

const PostItem = ({post, index}) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{index}.{post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;