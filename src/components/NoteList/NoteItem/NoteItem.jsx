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
            {console.log('TAGS', tags)}
            <ul className={classes.tagsBlock}>
                {tags.length >= 1 ? tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                )) : null}
            </ul>
        </div>
    );
};

export default NoteItem;