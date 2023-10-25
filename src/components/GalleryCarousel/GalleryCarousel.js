import React from 'react';
import ImageGallery from 'react-image-gallery';

const GalleryCarousel = ({ items }) => {
  const getImages = () =>
    items?.images
      ? items?.images?.map((_, idx) => ({
          original: `https://accion.panal.house//Imagenes//${
            items?.id
          }//${idx + 1}.jpg`,
          thumbnail: `https://accion.panal.house//Imagenes//${
            items?.id
          }//${idx + 1}.jpg`,
        }))
      : [];

  return (
    <ImageGallery
      autoPlay={true}
      slideDuration={500}
      slideInterval={3000}
      infinite={true}
      showNav={false}
      showPlayButton={false}
      showFullscreenButton={false}
      showBullets={false}
      showThumbnails={true}
      thumbnailPosition="left"
      items={getImages()}
    />
  );
};

export default GalleryCarousel;
