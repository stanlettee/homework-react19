import styles from './styles/Modal.module.css'

export const Modal = ({object, modal, closeModal}) => {
    if (modal === true) {
        return (
            <div onClick={closeModal} className={styles.overlay}>
                <div className={styles.modal}>
                    <img className={styles.image} src={object.webformatURL}/>
                </div>
            </div>
        )
    }


}