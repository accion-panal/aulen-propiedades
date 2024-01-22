import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';

import PropertiesServices from '../../services/PropertiesServices';
import { company } from '../../constants/consts/company';

const GalleryCarousel = ({ items }) => {
const [itemsId, setItemsId]=useState("");

const getPropertyId = async (id, statusId, companyId)=>{
  const data = await PropertiesServices.getProperty(id, statusId, companyId);

  setItemsId(data);
}


useEffect(()=>{
  getPropertyId(items.id, 1, company.companyId)
}, [])

  // const getImages = () =>
  //   items?.images
  //     ? items?.images?.map((_, idx) => ({
  //         original: `https://accion.panal.house//Imagenes//${
  //           items?.id
  //         }//${idx + 1}.jpg`,
  //         thumbnail: `https://accion.panal.house//Imagenes//${
  //           items?.id
  //         }//${idx + 1}.jpg`,
  //       }))
  //     : [];

      const getImages = (images) =>
      images
        ? images?.map((_, idx) => {
            const image = images[idx];
            const validExtensions = ['.jpg', '.jpeg', '.png'];

    
            if (image && validExtensions.some(ext => image.toLowerCase().endsWith(ext))) {
              return {
                original: `${image }`,
                thumbnail: `${image }`,
              };
            }
    
            // Devolver un objeto en caso si la extensión no es válida
            return {
              original:`https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg`,
              thumbnail:`https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg`
            }
       ;
          })
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
      items={getImages(itemsId?.images)}
    />
  );
};

export default GalleryCarousel;
