import React from 'react';
import classes from './NoteItem.module.sass'
import MyButton from "../../ui/MyButton/MyButton";

const NoteItem = ({text, id, remove}) => {
    return (
        <div className={classes.noteItem}>
            {text}
            <MyButton onClick={remove}
                      id={id}
                      icon='fal fa-trash-alt'/>
        </div>
    );
};

export default NoteItem;