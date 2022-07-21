import styles from './WidgetButton.module.scss';

const getWidgetButtonPosition = (position) =>{
    switch(position){
        case 'bottom-left':
            return styles['bottom-left'];
        case 'top-left':
            return styles['top-left'];
        case 'top-right':
            return styles['top-right'];
        case 'bottom-right':
            return styles['bottom-right']
    }
}

export {getWidgetButtonPosition};