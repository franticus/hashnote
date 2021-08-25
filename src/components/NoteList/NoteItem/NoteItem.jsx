import React from 'react';
import classes from './NoteItem.module.sass'
import MyButton from "../../ui/MyButton/MyButton";

const NoteItem = ({text, id, remove, editNote, tags}) => {
    return (
        <div className={classes.noteItemContainer}>
            <div className={classes.noteItem}>
                <div onClick={editNote}>
                    <p>{text}</p>
                </div>
                <MyButton onClick={remove}
                          id={id}
                          icon='fal fa-trash-alt'/>
            </div>

            <ul className={classes.tagsBlock}>
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    );
};

export default NoteItem;