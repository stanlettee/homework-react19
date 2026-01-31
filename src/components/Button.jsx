import styles from './styles/Button.module.css'

export const Button = ({loadButton}) => {
    return (
        <button className={styles.button} onClick={loadButton} type='click'>Load more</button>
    )
}