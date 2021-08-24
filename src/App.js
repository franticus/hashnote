import React, {useState} from 'react'
import './App.sass'
import TitleAdd from "./components/TitleAdd/TitleAdd";
import FooterAdd from "./components/FooterAdd/FooterAdd";
import NoteList from "./components/NoteList/NoteList";
import EditScreen from "./components/EditScreen/EditScreen";

function App() {

    const [noteList, setNoteList] = useState([
            {
                id: 1, text: "Никогда не преувеличивайте глупость врагов и верность друзей."
            },
            {
                id: 2,
                text: "Если вам говорят, что вы многогранная личность, — не обольщайтесь. Может быть, имеется в виду, что вы гад, сволочь и паразит одновременно."
            },
            {
                id: 3,
                text: "Лучше промолчать и показаться дураком, нежели заговорить и не оставить на этот счет никаких сомнений."
            },
            {
                id: 4,
                text: "Я же говорил: или я буду жить хорошо, или мои произведения станут бессмертными. И жизнь опять повернулась в сторону произведений."
            },
            {
                id: 5,
                text: "Ребята, уж если мы по горло в дерьме, возьмемся за руки!"
            }
        ]
    )
    const [note, setNote] = useState('')
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
        if (showEdit.step === 2) {
            const newPost = {...note, id: Date.now()}
            console.log(newPost)
            setNoteList([...noteList, newPost])
        }
        editToggle()
    }
    const removeNote = (note) => {
        console.log(note)
        setNoteList(noteList.filter(n => n.id !== note.id))
    }

    return (
        <div className="App">
            <TitleAdd title={showEdit.title}/>
            <NoteList notes={noteList}
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
