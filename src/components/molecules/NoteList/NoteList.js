import styles from './NoteList.module.scss';
import { renderNotes } from './NoteListLogic';
import notesStore from '../../../store/noteStore';

const NoteList = () =>{
    const notes = notesStore(state => state.notes);
    const isArchived = notesStore(state => state.isArchived);
    const searchInput = notesStore(state => state.searchInput);

    const filterSearchInput = (searchInput,notes) =>{
        return notes.filter(note => {
            if(note.title.toLowerCase().includes(searchInput.toLowerCase())){
                return note;
            }
        })
    }
    
    const getSortedNote = (notes, isArchived) =>{
        if(isArchived){
            let notesFilterArchived  =  notes.filter(note => note.archived === true)
            return filterSearchInput(searchInput, notesFilterArchived);
        }
        return filterSearchInput(searchInput,notes) ;
    }

    return(
        <>
        <div className={styles['note-list']}>
           {renderNotes(getSortedNote(notes, isArchived))}
        </div>
        </>
    )
}

export default NoteList;