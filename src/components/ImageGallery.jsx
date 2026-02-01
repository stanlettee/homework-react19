import styles from './styles/ImageGallery.module.css';
import { ImageGalleryItem } from './ImageGalleryItem';
import axios from 'axios';
import { Loader } from './Loader';
import { useState, useEffect, useCallback } from 'react';
import React from "react";

export const ImageGallery = React.memo(({ showModal, search, load }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = useCallback(async () => {
    if (!search) return;

    setIsLoading(true);

    try {
      const response = await axios.get('https://pixabay.com/api/', {
        params: {
          key: '50860863-3fd2c2b6f6ec06a8734a828e4',
          q: search,
          per_page: load,
        },
      });

      setImages(response.data.hits);
    } catch (error) {
      console.error('API ERROR:', error);
    } finally {
      setIsLoading(false);
    }
  }, [search, load]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  if (!search) {
    return (
      <div className={styles.div}>
        <h2 className={styles.title}>You haven't entered anything yet</h2>
      </div>
    );
  }

  return (
    <>
      <ul className={styles.ImageGallery}>
        <ImageGalleryItem
          changeObjectState={showModal}
          images={images}
        />
      </ul>
      {isLoading && <Loader />}
    </>
  );
});