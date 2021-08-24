import React from 'react';
import classes from "./FooterAdd.module.sass";

const FooterAdd = ({addNote, title}) => {
    return (
        <footer className={classes.footerAdd}
                onClick={addNote}
        >
            <h2>{title}</h2>
        </footer>
    );
};

export default FooterAdd;
