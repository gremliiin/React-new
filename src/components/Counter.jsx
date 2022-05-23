import React, {useState} from 'react';

const Counter = () => {
    const [likes, setLikes] = useState(0);
    return (
        <div>
            <h1>{likes}</h1>
            <button onClick={() => setLikes(likes + 1)}>increment</button>
            <button onClick={() => setLikes(likes - 1)}>Decrement</button>
        </div>
    );
};

export default Counter;