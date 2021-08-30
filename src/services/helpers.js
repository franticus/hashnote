export const filterTags = (text) => {
    const tags = text.split(' ')
    return tags.filter(el => el.charAt(0) === '#')
}