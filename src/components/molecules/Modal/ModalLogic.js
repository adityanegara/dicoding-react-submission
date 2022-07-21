import styles from './Modal.module.scss';

const getModalBackgroundColor = (background) =>{
    switch(background) {
        case 'red':
          return styles['modal-bg__red'];
        case 'orange':
          return styles['modal-bg__orange'];
        case 'blue':
          return styles['modal-bg__blue'];
        case 'green':
          return styles['modal-bg__green'];
        default:
         return styles['modal-bg__orange'];
      }
}

export {getModalBackgroundColor};