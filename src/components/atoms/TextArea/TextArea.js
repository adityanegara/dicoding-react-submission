import styles from './TextArea.module.scss';
import { getLabelText } from './TextAreaLogic';

const TextArea = ({placeholder, value, onHandleChange, rows, charactersLimit}) =>{
    const handleInputTyped = (newValue) =>{
        if(newValue.length > charactersLimit){
            return;
        }
        onHandleChange(newValue);
    }
    return(
        <>
        <textarea  value={value} className={styles['custom-textarea']} onChange={(e)=>{handleInputTyped(e.target.value)}} placeholder={placeholder} rows={rows} />
        <label className={styles['custom-label']}>{getLabelText(value, charactersLimit)}</label>
        </>
    )
}

export default TextArea;