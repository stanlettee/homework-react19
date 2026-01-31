import styles from './styles/ImageGalleryItem.module.css'
import { useMemo } from 'react';

export const ImageGalleryItem = ( {changeObjectState, images} ) => {
    const renderedImages = useMemo(() => {
        return images.map((image) => (
            <li
                onClick={() => changeObjectState(image)}
                key={image.id}
                className={styles.ImageGalleryItem}
            >
                <img
                    className={styles.ImageGalleryItemImage}
                    src={image.webformatURL}
                    alt={image.tags}
                />
            </li>
        ));
    }, [images, changeObjectState]);

    return <>{renderedImages}</>;
}