import styles from './WidgetButton.module.scss';
import { getWidgetButtonPosition } from './WidgetButtonLogic';
import uiStore from '../../../store/uiStore';

const WidgetButton = ({label, position, text}) =>{

    const toggleModalOpen = uiStore(state => state.toggleModalOpen);

    return(
        <button aria-label={label} onClick={toggleModalOpen} className={`${styles['widget-button']} ${getWidgetButtonPosition(position)}`}>
            {text}
        </button>
    )
}

export default WidgetButton;