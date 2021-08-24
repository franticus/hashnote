import React from 'react';
import classes from './MyButton.module.sass'

const MyButton = ({icon, color, text, id, onClick}) => {
    return (
        <button className={classes.myButton}
                onClick={onClick}
                id={id}
                style={{color: `${color}`}}
                type='button'>
            <i className={icon}/>
            {text}
        </button>
    );
};

export default MyButton;
