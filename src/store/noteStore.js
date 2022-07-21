import create from "zustand";
import { getInitialData, showFormattedDate} from "./initialData";

const notesStore = create(set => ({
    notes: getInitialData(),
    detailModalNote: {},
    setCurrentModalNote:  (note) => set({detailModalNote: note}),
    setCurrentModalNoteEmpty: () => set({detailModalNote: {}}),
    createNote: ({title, body, color}) =>{
        set(state => ({notes : [
            {
                id: new Date(),
                title,
                body,
                color,
                createdAt: showFormattedDate(new Date()),
                archieved: false,
            },...state.notes]}))
    },
    updateNote: ({id, title, body, color}) =>{
        set(state => ({
            notes: state.notes.map(note => {
                if(note.id === id){
                    return {
                        ...note,
                        title: title,
                        body: body,
                        color: color,
                    }
                }else{
                    return note;
                }
            })
        }))
    },
    deleteNote : (id) =>{
        set(state => ({
            notes: state.notes.filter(note => note.id !== id)
        }))
    }
}))

export default notesStore;