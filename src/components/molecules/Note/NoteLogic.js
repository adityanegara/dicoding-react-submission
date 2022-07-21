import styles from './Note.module.scss';

const getNoteWidth = (i, rowIndex) =>{
    if(rowIndex % 2 === 0){
        return (i % 2 === 0) ? styles['width-small'] : styles['width-large']
    }
    return (i % 2 === 0) ? styles['width-large'] : styles['width-small']
}

export {getNoteWidth}