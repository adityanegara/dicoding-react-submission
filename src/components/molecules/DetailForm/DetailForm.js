import styles from './DetailForm.module.scss';
import Input from '../../atoms/Input/Input';
import TextArea from '../../atoms/TextArea/TextArea';
import { useState } from 'react';
import ColorButtons from '../ColorButtons/ColorButton';
import {getFontColorCreateButtonHover, getTextAreaRows} from './DetailFormLogic';
import uiStore from '../../../store/uiStore';
import useMediaQuery from '../../../hooks/useMediaQuery';
import notesStore from '../../../store/noteStore'; 

const DetailForm = () =>{
    const detailModalNote = notesStore(state => state.detailModalNote);
    const setCurrentModalNoteEmpty = notesStore(state => state.setCurrentModalNoteEmpty);
    const updateNote = notesStore(state => state.updateNote);
    const deleteNote = notesStore(state => state.deleteNote);
    const [title, setTitle] = useState(detailModalNote.title);
    const [description, setDescription] = useState(detailModalNote.body);
    const toggleModalOpen = uiStore(state => state.toggleModalOpen);
    const changeCreateModalBackgroundColor = uiStore(state => state.changeCreateModalBackgroundColor);
    const createModalBackgroundColor = uiStore(state => state.createModalBackgroundColor);
  

    const isDesktop = useMediaQuery('(min-width: 600px)');

    const onHandleTitleChange = (newTitle) =>{
        setTitle(newTitle);
    }

    const onHandleDescriptionChange = (newDescription) =>{
        setDescription(newDescription);
    }

    const onHandleResetButtonClicked = () =>{
        setTitle(detailModalNote.title);
        setDescription(detailModalNote.body);
        changeCreateModalBackgroundColor(detailModalNote.color);
    }

    const onHandleEditButtonClicked = () =>{
        updateNote({
            id: detailModalNote.id,
            title: title,
            body: description,
            color: createModalBackgroundColor
        })
        setCurrentModalNoteEmpty();
        toggleModalOpen();
        
    }

    const onHandleDeleteButtonClicked = () =>{
        deleteNote(detailModalNote.id);
        setCurrentModalNoteEmpty();
        toggleModalOpen();
    }


    return(
        <form onSubmit={(e)=>{e.preventDefault()}}className={styles['create-form']}>
              <Input value={title} onHandleChange={onHandleTitleChange} type="text" placeholder="Note Title..." charactersLimit={50}/>
              <TextArea rows={getTextAreaRows(isDesktop)} value={description} onHandleChange={onHandleDescriptionChange} placeholder="Note Description..." charactersLimit={500}/>
              <ColorButtons/>
              <div className={styles['button-group']}>
                    <div className={styles['right-buttons']}>
                        <button type='button' onClick={onHandleDeleteButtonClicked} className={styles['delete-button']}>Delete</button>
                        <button type='button' onClick={onHandleEditButtonClicked} className={`${getFontColorCreateButtonHover(createModalBackgroundColor)} ${styles['edit-button']}`}>Edit</button>
                    </div>
                    <button className={styles['reset-button']}  onClick={onHandleResetButtonClicked}>Reset</button>
              </div>
        </form>
    )
}

export default DetailForm;