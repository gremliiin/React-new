import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts, title}) => {

    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts.map((el, index) => {
                return <PostItem index={index + 1} key={el.id} post={el} />
            })}
        </div>
    );
};

export default PostList;