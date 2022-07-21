import styles from './CreateForm.module.scss';
import Input from '../../atoms/Input/Input';
import TextArea from '../../atoms/TextArea/TextArea';
import { useState } from 'react';
import ColorButtons from '../ColorButtons/ColorButton';
import {getFontColorCreateButtonHover, getTextAreaRows} from './CreateFormLogic';
import uiStore from '../../../store/uiStore';
import useMediaQuery from '../../../hooks/useMediaQuery';
import notesStore from '../../../store/noteStore'; 

const CreateForm = () =>{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const createModalBackgroundColor = uiStore(state => state.createModalBackgroundColor);
    const toggleModalOpen = uiStore(state => state.toggleModalOpen);
    const createNote = notesStore(state => state.createNote);
    const isDesktop = useMediaQuery('(min-width: 600px)');


    const onHandleTitleChange = (newTitle) =>{
        setTitle(newTitle);
    }

    const onHandleDescriptionChange = (newDescription) =>{
        setDescription(newDescription);
    }

    const onHandleResetButtonClicked = () =>{
        setTitle('');
        setDescription('');
    }

    const onHandleCreateButtonClicked = () =>{
        createNote({
            title: title,
            body: description,
            color: createModalBackgroundColor
        })
        toggleModalOpen();
    }

    return(
        <form onSubmit={(e)=>{e.preventDefault()}}className={styles['create-form']}>
              <Input value={title} onHandleChange={onHandleTitleChange} type="text" placeholder="Note Title..." charactersLimit={50}/>
              <TextArea rows={getTextAreaRows(isDesktop)} value={description} onHandleChange={onHandleDescriptionChange} placeholder="Note Description..." charactersLimit={500}/>
              <ColorButtons/>
              <div className={styles['button-group']}>
                    <button type='button' onClick={onHandleCreateButtonClicked} className={getFontColorCreateButtonHover(createModalBackgroundColor)}>Create</button>
                    <button onClick={onHandleResetButtonClicked}>Reset</button>
              </div>
        </form>
    )
}

export default CreateForm;