import NOTES from './notes'
// eslint-disable-next-line import/no-anonymous-default-export
export default (note) => {
    return NOTES.includes(note) && note.includes('#')
}