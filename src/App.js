import React, {useState} from 'react'
import './App.sass'
import TitleAdd from "./components/TitleAdd/TitleAdd";
import FooterAdd from "./components/FooterAdd/FooterAdd";
import NoteList from "./components/NoteList/NoteList";
import EditScreen from "./components/EditScreen/EditScreen";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {

    const [noteList, setNoteList] = useState([
            {
                id: 1,
                text: "Никогда не преувеличивайте глупость #врагов и верность #друзей.",
                tags: ['#tags', '#tags2']
            },
            {
                id: 2,
                text: "Если вам говорят, что вы многогранная #личность, — не обольщайтесь. Может быть, имеется в" +
                    " виду, что вы гад, #сволочь и паразит одновременно.",
                tags: ['#tags', '#tags2']
            },
            {
                id: 3,
                text: "Лучше промолчать и показаться #дураком, нежели заговорить и не оставить на этот счет никаких" +
                    " #сомнений.",
                tags: ['#tags', '#tags2']
            },
            {
                id: 4,
                text: "Я же говорил: или я буду #жить хорошо, или мои произведения станут #бессмертными. И жизнь" +
                    " опять повернулась в сторону произведений.",
                tags: ['#tags', '#tags2']
            },
            {
                id: 5,
                text: "Ребята, уж если мы по горло в #дерьме, возьмемся за #руки!",
                tags: ['#tags', '#tags2']
            }
        ]
    )
    const [note, setNote] = useState({
        text: '', tags: ['#tags', '#Newtag']
    })
    const [showEdit, setShowEdit] = useState({
        onShow: false, title: 'Мои заметки',
        footer: 'Добавить', step: 1
    })
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
    }
    const addNote = () => {
        setNote({...note, text: ''})
        if (showEdit.step === 2 && note.text !== '') {
            const newPost = {...note, id: Date.now()}
            console.log(newPost)
            setNoteList([...noteList, newPost])
        }
        editToggle()
    }
    const editNote = (note) => {
        editToggle()
        setNote({...note, text: note.text})
        console.log(note.text)
    }
    const removeNote = (note) => {
        console.log(note)
        setNoteList(noteList.filter(n => n.id !== note.id))
    }
    const [searchNote, setSearchNote] = useState('')

    const searchedNotes = noteList.filter(note => {
     return note.text.toLowerCase().includes(searchNote.toLowerCase())
    })


    return (
        <div className="App">
            <TitleAdd title={showEdit.title}/>
            <SearchBar value={searchNote}
                       onChange={e => setSearchNote(e.target.value)}
            />
            <NoteList notes={searchedNotes}
                      editNote={editNote}
                      remove={removeNote}
            />
            {showEdit.onShow
                ? <EditScreen create={addNote}
                              note={note}
                              cancel={editToggle}
                              setNote={setNote}
                />
                : null}
            <FooterAdd addNote={addNote}
                       title={showEdit.footer}/>
        </div>
    );
}

export default App;
