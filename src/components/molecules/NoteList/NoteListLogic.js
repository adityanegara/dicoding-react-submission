import styles from './NoteList.module.scss';
import arrayToChunkArray from '../../../helpers/arrayToChunkArray';
import Note from '../Note/Note';


const renderNotes = (notes) =>{
    if(notes.length > 0){
        const noteRow = arrayToChunkArray(notes, 2);
        return noteRow.map((noteRow, rowIndex)=>{
            return(
                <ul key={`row-${rowIndex}`}  className={styles['note-row']}>
                    {renderNoteRow(noteRow, rowIndex)}
                </ul>
            )
        })
    }
    return(
        <p className={styles['empty-note']}>No Notes</p>
    )
    
}

const renderNoteRow = (noteRow, rowIndex) =>{
    return noteRow.map((note, i) =>{
        return(
            <Note key={note.id} note={note} index={i} rowIndex={rowIndex}/>
        )
    })
}  

export {renderNotes};