import React from 'react';
import { parseToCLPCurrency, ufToClp, clpToUf2, parseToDecimal } from '../../utils';
import { icons } from '../Icons';

const CardMap = ({ propertyData , valueUf}) => {
  const { FaMapMarkerAlt } = icons;

  const image =  propertyData.image;
  
  const validaImage = (image) => {
    if (image) {
      const validExtensions = ['.jpg', '.jpeg', '.png'];
  
      if (validExtensions.some(ext => image.toLowerCase().endsWith(ext))) {
        return (
          <img
          src={image}
          alt={`small-card-${propertyData?.title}`}
          className="h-[200px] w-[100%] object-cover rounded-t-xl xl:rounded-none"
        />
        );
      }
    }
    return (
      <img
      src={`https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg`}
      alt={`small-card-${propertyData?.title}`}
      className="h-[200px] w-[100%] object-cover rounded-t-xl xl:rounded-none"
    />
    );
  };

  const _renderItem = (name,code,price) => {
    let ufValue = price;
    let clpValue = price;

    if(valueUf.Valor != null){
      let valueIntUF = valueUf.Valor.replace(/\./g, '').replace(',', '.') ||[""];
      if (name === 'UF' && code === 'UF'){
        clpValue = ufToClp(price,valueIntUF);
      }
      if (name === 'Peso Chileno' && code === 'CLP'){
        ufValue = clpToUf2(price,valueIntUF);
      }
    }
    else {
      clpValue = 0;
      ufValue ;

    }

    return (
      <div>
      <span>Desde:</span>{' '}
          <strong>UF: {parseToDecimal(ufValue)}</strong>
      <span></span>{' '}
        <strong >
        CLP: {parseToCLPCurrency(clpValue)}
      </strong>
    </div>
    )
  };

  return (
    <div className="max-w-sm bg-white">
      <a href="#">
        {validaImage(image)}
      </a>

      <div>
        <span className="bg-orange-500 text-white px-2 py-.5 rounded-full">
          {propertyData?.operation || ""} / {propertyData?.types?.[0] ?? 'Propiedad'}
        </span>
        <p className="mb-3 flex items-center mt-2 font-normal text-gray-700 dark:text-gray-400">
          <FaMapMarkerAlt className="pr-1" />
          {propertyData?.address ?? 'Dirección no registrada'} ,{' '}
          {propertyData?.commune ?? 'Comuna no registrada'} ,{' '}
          {propertyData?.city ?? 'Ciudad no registrada'}
        </p>

        <div>
          {/* <span>Desde:</span>{' '}
          <strong>{parseToCLPCurrency(propertyData?.price || 0) ?? ''}</strong> */}
           {_renderItem(propertyData?.currency?.name, propertyData?.currency?.isoCode, propertyData.price)}
        </div>

        <div>
          <span>
            {`${propertyData?.surface_m2}`} m<sup>2</sup> utiles -
            {propertyData?.bedrooms} dorms.
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardMap;
