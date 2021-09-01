import axios from "axios";

const apiUrl = 'https://stark-shelf-84244.herokuapp.com'

export const getNotes = async () => {
    const res = await axios.get(`${apiUrl}/notes`)
    return res.data
}
export const createNote = async (newNote) => {
    await axios.post(`${apiUrl}/createNote`, newNote)

}
export const editorNote = async (editedNote) => {
    await axios.post(`${apiUrl}/editNote`, editedNote)
}

export const deleteNote = async (deletedNote) => {
    await axios.delete(`${apiUrl}/deleteNote`, {
        data: {
            source: deletedNote
        }
    })
}