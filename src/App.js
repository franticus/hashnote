import React, {useEffect, useState} from 'react'
import './App.sass'
import TitleAdd from "./components/TitleAdd/TitleAdd";
import FooterAdd from "./components/FooterAdd/FooterAdd";
import NoteList from "./components/NoteList/NoteList";
import EditScreen from "./components/EditScreen/EditScreen";
import SearchBar from "./components/SearchBar/SearchBar";
import {createNote, deleteNote, editNote, getNotes} from "./services/api";

function App() {

    const [noteList, setNoteList] = useState([])
    const [note, setNote] = useState({
        text: '', tags: []
    })
    const [showEdit, setShowEdit] = useState({
        onShow: false, title: 'Мои заметки',
        footer: 'Добавить', step: 1
    })
    const [searchNote, setSearchNote] = useState('')
    const editToggle = () => {
        showEdit.step === 1
            ?
            setShowEdit({
                onShow: true, title: 'Редактирование',
                footer: 'Сохранить', step: 2
            })
            :
            setShowEdit({
                onShow: false, title: 'Мои заметки',
                footer: 'Добавить', step: 1
            })
        setNote({...note, text: ''})
    }
    const changeNote = (editedNote) => {
        console.log(editedNote)
        setShowEdit({
            onShow: true, title: 'Редактирование',
            footer: 'Применить', step: 3
        })
        setNote(editedNote)
    }
    const addNote = async () => {
        if (showEdit.step === 3) {
            await editNote(note)
            const newList = await getNotes()
            setNoteList(newList)
        }
        if (showEdit.step === 2 && note.text !== '') {
            const newNote = {...note, id: Date.now()}
            setNoteList([...noteList, newNote])
            createNote(newNote)
        }
        editToggle()
    }
    const removeNote = async (note) => {
        console.log(note)
        await deleteNote(note)
        const newList = await getNotes()
        setNoteList(newList)
    }
    const searchedNotes = noteList.filter(note => {
        return note.text.toLowerCase().includes(searchNote.toLowerCase())
    })
    const clearSearch = () => {
        setSearchNote('')
    }
    const tagSearch = (e) => {
        setSearchNote(e.target.innerText)
    }

    useEffect(() => {
        async function fetchData() {
            const arrNotes = await getNotes()
            setNoteList(arrNotes)
        }

        fetchData().then(r => r)
    }, [noteList.length])

    return (
        <div className="App">
            <TitleAdd title={showEdit.title}/>
            <SearchBar value={searchNote} clear={clearSearch}
                       onChange={e => setSearchNote(e.target.value)}
            />
            <NoteList notes={searchedNotes}
                      editNote={changeNote}
                      remove={removeNote} tagSearch={e => tagSearch(e)}
            />
            {showEdit.onShow &&
            <EditScreen create={addNote} note={note} cancel={editToggle}
                        setNote={setNote}/>}
            <FooterAdd addNote={addNote}
                       title={showEdit.footer}/>
        </div>
    );
}

export default App;
