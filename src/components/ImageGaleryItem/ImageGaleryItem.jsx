import React from 'react';
import css from './ImageGaleryItem.module.css';

export default function ImageGaleryItem() {
  return (
    <li className={css.ImageGalleryItem}>
      <img src="" alt="" className={css.ImageGalleryItemImage} />
    </li>
  );
}
