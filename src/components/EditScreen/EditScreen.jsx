import React, {useState} from 'react';
import classes from './EditScreen.module.sass'
import {NavLink} from "react-router-dom";
import MyButton from "../ui/MyButton/MyButton";

const EditScreen = ({cancel, note, setNote, addNote}) => {

    // const addNewNote = () => {
    //     const newNote = {...note, id: Date.now()}
    //     if (note.text !== '') {
    //         setNote({...note, newNote})
    //         addNote(newNote)
    //     }
    // }

    return (
        <div className={classes.editScreen}>
            <h1 className={classes.editTitle}>Редактирование</h1>
            <div className={classes.noteEditor}>
                <textarea name="text"
                          onChange={(e) => setNote(
                              {...note, text: e.target.value})}
                          placeholder='Введите текст'
                          id="textEdit">
                </textarea>
                    <MyButton onClick={cancel} text='Отменить'/>
            </div>
        </div>
    );
};

export default EditScreen;
