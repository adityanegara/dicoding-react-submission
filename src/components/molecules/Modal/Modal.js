import ReactDOM from 'react-dom';
import Overlay from "../../atoms/Overlay/Overlay";
import uiStore from "../../../store/uiStore";
import notesStore from '../../../store/noteStore';
import styles from './Modal.module.scss';
import CreateForm from '../CreateForm/CreateForm';
import DetailForm from '../DetailForm/DetailForm';
import closeIcon from '../../../assets/icons/close.png';
import { getModalBackgroundColor } from './ModalLogic';
import _ from 'lodash';

const Modal = () =>{
    const isModalOpen = uiStore(state => state.isModalOpen);
    const toggleModalOpen = uiStore(state => state.toggleModalOpen);
    const createModalBackgroundColor = uiStore(state => state.createModalBackgroundColor);
    const detailModalNote = notesStore(state => state.detailModalNote);
    const setCurrentModalNoteEmpty = notesStore(state => state.setCurrentModalNoteEmpty)
    
    const closeModal  = () =>{
        if(_.isEmpty(detailModalNote) !== true){
            setCurrentModalNoteEmpty();
        }
        toggleModalOpen();
    }

    const renderModalContent = () =>{
        if(_.isEmpty(detailModalNote) !== true){
            return <DetailForm/>
        }
        return <CreateForm/>
    }

    const stopPropagation = (e) =>{
        e.stopPropagation();
    }
    const renderModal = (isModalOpen) =>{
        return (isModalOpen) ? 
            (
            <Overlay onHandleOverlayClicked={closeModal}>
                <div className={`${styles['modal']} ${getModalBackgroundColor(createModalBackgroundColor)}`} onClick={stopPropagation}>
                    <div className={styles['close-modal__button']}>
                    <button onClick={closeModal} aria-label='close modal' >
                        <img alt='close' src={closeIcon}/>
                    </button>
                    </div>
              
                   <div className={styles['modal-content']} >
                        {renderModalContent()}
                   </div>
                </div>
            </Overlay>)
             : null
    }
    return ReactDOM.createPortal(renderModal(isModalOpen), document.getElementById('modal'))
}

export default Modal;