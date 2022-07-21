import styles from './Note.module.scss';
import { getNoteWidth} from './NoteLogic';
import notesStore from '../../../store/noteStore';
import uiStore from '../../../store/uiStore';

const Note = ({note, index, rowIndex}) =>{
    
    const changeCreateModalBackgroundColor = uiStore(state => state.changeCreateModalBackgroundColor);
    const toggleModalOpen = uiStore(state => state.toggleModalOpen);
    const setCurrentModalNote = notesStore(state => state.setCurrentModalNote);

    const handleNoteClicked = (note) =>{
        setCurrentModalNote(note);
        changeCreateModalBackgroundColor(note.color);
        toggleModalOpen();
    } 

    return(
        <li onClick={()=>{handleNoteClicked(note)}} className={`${styles['note']} ${styles[`${note.color}-note`]} ${getNoteWidth(index, rowIndex)}`}>
            <p>{note.title}</p>
        </li>
    )
}

export default Note;