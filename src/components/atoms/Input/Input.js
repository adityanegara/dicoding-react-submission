import styles from './Input.module.scss';
import { getLabelText } from './InputLogic';


const Input = ({type, placeholder, value, onHandleChange, charactersLimit}) =>{
    const handleInputTyped = (newValue) =>{
        if(newValue.length > charactersLimit){
            return;
        }
        onHandleChange(newValue);
    }
    return(
        <>
        <input type={type}  placeholder={placeholder} value={value} onChange={(e)=>{handleInputTyped(e.target.value)}} className={styles['custom-input']}/>
        <label className={styles['custom-label']}>{getLabelText(value, charactersLimit)}</label>
        </>
    )
}

export default Input