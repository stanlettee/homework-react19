import styles from './styles/Modal.module.css'
import React from "react";

export const Modal = React.memo(({object, modal, closeModal}) => {
    if (modal === true) {
        return (
            <div onClick={closeModal} className={styles.overlay}>
                <div className={styles.modal}>
                    <img className={styles.image} src={object.webformatURL}/>
                </div>
            </div>
        )
    }


})