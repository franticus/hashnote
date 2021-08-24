import React from 'react';
import classes from './NoteList.module.sass'
import NoteItem from "./NoteItem/NoteItem";

const NoteList = ({notes, remove}) => {

    return (
        <div className={classes.noteList}>
            {notes.map((note, index) => (
                <NoteItem key={note.id}
                          remove={() => remove(note)}
                          id={index}
                          text={note.text}
                />
            ))}
        </div>
    );
};

export default NoteList;
