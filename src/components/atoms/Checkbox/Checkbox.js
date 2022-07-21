import styles from './Checkbox.module.scss';

const Checkbox = ({checked, onHandleChange, labelText}) =>{
    return(
        <label className={styles['container']}>{labelText}
            <input checked={checked} onChange={(e)=>{onHandleChange(e.target.checked)}} type="checkbox" />
            <span className={styles['checkmark']}></span>
        </label>
    )
}

export default Checkbox;