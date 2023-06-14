import React from 'react';
import { parseToCLPCurrency } from '../../utils';
import { icons } from '../Icons';

const CardMap = ({ propertyData }) => {
  const { FaMapMarkerAlt } = icons;
  return (
    <div className="max-w-sm bg-white">
      <a href="#">
        <img
          src={
            `https://aulen.partnersadvisers.info/properties/secure-imgs/Imagenes//${propertyData?.id}//1.jpg` ??
            `https://aulen.partnersadvisers.info/properties/secure-imgs/Imagenes//${propertyData?.id}//2.jpg` ??
            `https://aulen.partnersadvisers.info/properties/secure-imgs/Imagenes//${propertyData?.id}//3.jpg`
          }
          alt={`small-card-${propertyData?.title}`}
          className="h-[200px] w-[100%] object-cover rounded-t-xl xl:rounded-none"
        />
      </a>

      <div>
        <span className="bg-orange-500 text-white px-2 py-.5 rounded-full">
          {propertyData?.types?.[0] ?? 'Propiedad'}
        </span>
        <p className="mb-3 flex items-center mt-2 font-normal text-gray-700 dark:text-gray-400">
          <FaMapMarkerAlt className="pr-1" />
          {propertyData?.address ?? 'Dirección no registrada'} ,{' '}
          {propertyData?.commune ?? 'Comuna no registrada'} ,{' '}
          {propertyData?.city ?? 'Ciudad no registrada'}
        </p>

        <div>
          <span>Desde:</span>{' '}
          <strong>{parseToCLPCurrency(propertyData?.price || 0) ?? ''}</strong>
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
