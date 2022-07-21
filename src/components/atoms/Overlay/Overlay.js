import styles from './Overlay.module.scss';

const Overlay = ({children, onHandleOverlayClicked}) =>{
    
    return(
        <div onClick={onHandleOverlayClicked} className={styles['overlay']}>
            {children}
        </div>
    )
}

export default Overlay;