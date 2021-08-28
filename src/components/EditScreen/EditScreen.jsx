import React from 'react';
import classes from './EditScreen.module.sass'
import MyButton from "../ui/MyButton/MyButton";
import '../../_variables.sass'

const EditScreen = ({cancel, note, setNote}) => {

    return (
        <div className={classes.editScreen}>
            <div className={classes.noteEditor}>
                <textarea name="text"
                          value={note.text}
                          onChange={e => {
                              setNote({...note, text: e.target.value})
                          }
                          }
                          placeholder='Введите текст'
                          id="textEdit">
                </textarea>
                <MyButton onClick={cancel} text='Отменить'/>
            </div>
        </div>
    );
};

export default EditScreen;


