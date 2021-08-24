import React from 'react';
import classes from './TitleAdd.module.sass'

const TitleAdd = ({title}) => {
    return (
        <header className={classes.titleAdd}>
            <h1>{title}</h1>
        </header>
    );
};

export default TitleAdd;
