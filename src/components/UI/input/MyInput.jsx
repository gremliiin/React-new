import React from 'react';
import classes from "./MyInput.module.css"

const MyInput = (props) => {
    return (
        <div>
            <input type="text" className={classes.myInput} {...props}/>
        </div>
    );
};

export default MyInput;