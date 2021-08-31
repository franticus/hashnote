import axios from "axios";

export const getNotes = async () => {
    const res = await axios.get('http://127.0.0.1:3100/notes')
    return res.data
}
export const createNote = async (newNote) => {
    await axios.post('http://127.0.0.1:3100/createNote', newNote)

}
export const editorNote = async (editedNote) => {
    await axios.post('http://127.0.0.1:3100/editNote', editedNote)
}

export const deleteNote = async (deletedNote) => {
    await axios.delete('http://127.0.0.1:3100/deleteNote', {
        data: {
            source: deletedNote
        }
    })
}