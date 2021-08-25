import React from 'react';
import classes from './NoteList.module.sass'
import NoteItem from "./NoteItem/NoteItem";

const NoteList = ({notes, remove, editNote}) => {

    return (
        <div className={classes.noteList}>
            {notes.map((note, index) => (
                <NoteItem key={note.id}
                          remove={() => remove(note)}
                          editNote={() => editNote(note)}
                          id={index}
                          tags={note.tags}
                          text={note.text}
                />
            ))}
        </div>
    );
};

export default NoteList;