import React from 'react';
import { parseToCLPCurrency } from '../../utils';

const CardMap = ({ propertyData }) => {
  return (
    <div className="max-w-sm bg-white">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={
            propertyData?.images[0] ?? propertyData?.images[1] ?? propertyData?.images[2]
          }
          alt={`small-card-${propertyData?.title}`}
          style={{
            height: '30px',
          }}
        />
      </a>

      <div>
        <span className="bg-orange-500 text-white px-2 py-.5 mt-1 rounded-full">
          {propertyData?.types?.[0] ?? 'Propiedad'}
        </span>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
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
