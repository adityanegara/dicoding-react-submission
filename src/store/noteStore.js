import create from "zustand";
import { getInitialData, showFormattedDate} from "./initialData";

const notesStore = create(set => ({
    notes: getInitialData(),
    isArchived: false,
    searchInput: '',
    detailModalNote: {},
    setSearchInput: (search) =>{set({searchInput: search})},
    setIsArchivedTrue : () =>   set(({isArchived: true})),
    setIsArchivedFalse : () =>   set(({isArchived: false })),
    setCurrentModalNote:  (note) => set({detailModalNote: note}),
    setCurrentModalNoteEmpty: () => set({detailModalNote: {}}),
    createNote: ({title, body, color, archived}) =>{
        set(state => ({notes : [
            {
                id: new Date(),
                title,
                body,
                color,
                archived : archived,
                createdAt: showFormattedDate(new Date()),
            },...state.notes]}))
    },
    updateNote: ({id, title, body, color, archived}) =>{
        set(state => ({
            notes: state.notes.map(note => {
                if(note.id === id){
                    return {
                        ...note,
                        title: title,
                        body: body,
                        color: color,
                        archived: archived,
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