export const filterTags = (note) => {
    const tags = note.text.split(' ')
    const res = []
    for (let i = 0; i < tags.length; i++) {
        if (tags[i].includes("#")) {
            res.push(tags[i]);
        }
    }
    return res
}