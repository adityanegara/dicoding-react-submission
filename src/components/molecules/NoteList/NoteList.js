import styles from './NoteList.module.scss';
import { renderNotes } from './NoteListLogic';
import notesStore from '../../../store/noteStore';

const NoteList = () =>{
    const notes = notesStore(state => state.notes);
    return(
        <div className={styles['note-list']}>
           {renderNotes(notes)}
        </div>
    )
}

export default NoteList;