import styles from './SortGroup.module.scss';

const getSelectedButton = (button, isArchived) =>{
    if(button === 'archived' && isArchived === true){
        return styles['selected-button'];
    }
    if(button === 'all' && isArchived === false ){
        return styles['selected-button'];
    }
    return '';
}

export {getSelectedButton};