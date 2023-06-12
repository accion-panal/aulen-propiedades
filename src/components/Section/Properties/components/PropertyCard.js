import React from 'react';
import { Link } from 'react-router-dom';
import { truncateString, parseToCLPCurrency } from '../../../../utils';
import { company } from '../../../../constants/consts/company';

const PropertyCard = ({ data, isList }) => {
  const { id, title, image, address, commune, city, price, types, operation } =
    data;

  console.log(data);

  return (
    <div
      className={`${
        isList
          ? 'flex flex-col items-center bg-white border border-gray-200 rounded shadow md:flex-row'
          : 'w-full bg-white'
      } border rounded border-gray-200 hover:cursor-pointer hover:shadow-xl transition duration-300 ease-in-out`}
    >
      {image ? (
        <img
          className={
            isList
              ? 'h-64 xl:h-64 w-[100%] xl:w-[400px] object-cover'
              : 'rounded-t-lg'
          }
          src={image}
          alt={`top-img-${title}`}
          width="full"
        />
      ) : (
        <img
          className={
            isList
              ? 'h-64 xl:h-64 w-[100%] xl:w-[400px] object-cover'
              : 'rounded-t-lg'
          }
          src={
            'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg'
          }
          alt={`top-img-${title}`}
          width="full"
        />
      )}

      <div className="p-3 relative">
        <div
          className={`${
            operation === 'Venta'
              ? 'bg-orange-500 text-white'
              : operation === 'Arriendo'
              ? 'bg-violet-900 text-white'
              : 'bg-slate-600 text-white'
          } ${
            isList
              ? 'w-[50%] mb-2 text-center rounded-full p-1 shadow-sm'
              : 'absolute px-3 -top-5 z-50 rounded-full shadow-xl'
          } text-md`}
        >
          {operation}
        </div>

        <span className="uppercase text-orange-500">Cod: {id}</span>
        <h5 className="mb-2 h-20 text-lg xl:text-lg font-bold text-gray-800">
          {truncateString(title || 'Titulo de propiedad no registrado', 60)}
        </h5>
        <p className="mb-3 font-normal text-sm text-gray-400">
          {address}, {commune}, {city}
        </p>
        <p className="mb-3 font-normal text-orange-500 text-end">
          {types?.[0]}: {parseToCLPCurrency(price)}
        </p>
        <Link
          to={`/propiedades/${id}?statusId=${company.statusId}&companyId=${company.companyId}`}
          className="inline-flex rounded-full items-center px-3 py-2 text-sm font-medium text-center text-white hover:shadow-lg bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300"
        >
          Detalles
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
