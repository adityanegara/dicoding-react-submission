import styles from './ColorButtons.module.scss'
import uiStore from '../../../store/uiStore';
import { getSelectedButton } from './ColorButtonsLogic';

const ColorButton = () =>{
    const createModalBackgroundColor = uiStore(state => state.createModalBackgroundColor);
    const changeCreateModalBackgroundColor = uiStore(state => state.changeCreateModalBackgroundColor);
    return(
        <div className={styles['colors-button']}>
            <button onClick={()=>{changeCreateModalBackgroundColor('orange')}} className={`${styles['orange-button']} ${getSelectedButton('orange', createModalBackgroundColor)}`}/>
            <button onClick={()=>{changeCreateModalBackgroundColor('red')}} className={`${styles['red-button']} ${getSelectedButton('red', createModalBackgroundColor)}`}/>
            <button onClick={()=>{changeCreateModalBackgroundColor('blue')}} className={`${styles['blue-button']} ${getSelectedButton('blue', createModalBackgroundColor)}`}/>
            <button onClick={()=>{changeCreateModalBackgroundColor('green')}}className={`${styles['green-button']} ${getSelectedButton('green', createModalBackgroundColor)}`}/>
        </div>
    )
}

export default ColorButton;