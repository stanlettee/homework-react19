import styles from './styles/Button.module.css'
import React from "react";

export const Button = React.memo(({loadButton}) => {
    return (
        <button className={styles.button} onClick={loadButton} type='click'>Load more</button>
    )
})