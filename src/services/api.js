import axios from "axios";

export const getNotes = () => {

    axios.get('http://127.0.0.1:3100/notes')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
        });
}
export const createNote = async (newNote) => {

    axios.post('http://127.0.0.1:3100/createNote', newNote)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
        });
}


