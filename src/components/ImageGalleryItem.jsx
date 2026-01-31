import styles from './styles/ImageGalleryItem.module.css'

export const ImageGalleryItem = ( {changeObjectState, images} ) => {
    return (
        images.map((image, index) => {
            return <li onClick={() => {changeObjectState(image)}} key={index} className={styles.ImageGalleryItem}><img className={styles.ImageGalleryItemImage} src={image.webformatURL}/></li>
        })
    )
}