import React from 'react';
import { Link } from 'react-router-dom';
import { truncateString, parseToCLPCurrency , ufToClp, clpToUf2, parseToDecimal} from '../../../../utils';
import { company } from '../../../../constants/consts/company';
import { icons } from '../../../Icons';

const PropertyCard = ({ data, isList , valueUf}) => {
  const { id, title, image, address, commune, city, price, types, operation } =
    data;

  const { FaMapMarkerAlt } = icons;

  // console.log(types)

      // Validador de extension .jpg / .png/ .jpeg  para las imgs
      const validaImage = (image) => {
        if (image) {
          const validExtensions = ['.jpg', '.jpeg', '.png'];
      
          if (validExtensions.some(ext => image.toLowerCase().endsWith(ext))) {
            return (
              <img
              className={`${
                isList
                  ? 'h-[250px] w-[100%] xl:w-[400px] object-cover rounded-t-xl xl:rounded-none'
                  : 'rounded-t-xl w-[100%]'
              } h-64 xl:h-64 w-[100%] object-cover`}
                src={image}
                alt={`top-img-${title}`}
                width="full"
                loading='lazy'

              />
            );
          }
        }
        return (
          <img
            className={`${
            isList
              ? 'h-[700px] w-[100%] xl:w-[400px] object-cover'
              : 'rounded-t-xl'
          } h-64 xl:h-64 w-[100%] object-cover`}
            src={`https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg`}
            alt={`top-img-${title}`}
            width="full"
            loading='lazy'

          />
        );
      };


  const _renderItem = (name,code,price) => {
    let ufValue = price;
    let clpValue = price;

    if(valueUf.Valor != null){
      let valueIntUF = valueUf.Valor.replace(/\./g, '').replace(',', '.');
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
      <div className= {`${isList ? 'grid grid-cols-1' : ""}flex justify-between`}>
        <div className="mb-3 font-bold text-orange-500 text-sm text-end  pt-2 ">
          <span className="mr-1">UF: </span>{' '}
          {parseToDecimal(ufValue)}
        </div>
        <div className="mb-3 font-bold text-orange-500 text-sm text-end  pt-2 ">
          <span className="mr-1">CLP: </span>{' '}
          {parseToCLPCurrency(clpValue)}
        </div>
      </div>
    )
  };

  return (
    <div
      className={`${
        isList
          ? 'flex flex-col items-center bg-white border border-gray-200 hover:shadow-lg md:flex-row'
          : 'w-full'
      } border rounded-xl border-gray-200 hover:cursor-pointer hover:shadow-xl transition duration-300 ease-in-out`}
    >

      {validaImage(image)}
      
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
              ? 'w-[50%] mb-2 text-center rounded-sm px-3 p-1 shadow-sm'
              : 'absolute -top-5 z-50 rounded-sm px-3 shadow-xl'
          } text-md`}
        >
          {operation ? operation : "No registra operación"} / {types ? types : "No registra inmueble" }
        </div>

        <span className="uppercase text-sm text-orange-500">Cod: {id}</span>
        <h5 className="mb-2 h-20 text-md xl:text-md font-normal text-gray-800">
          {truncateString(title, 50)}
        </h5>
        <p className="flex items-center justify-start mb-2 font-normal h-9 text-sm text-gray-400">
          <FaMapMarkerAlt className="pr-1" />
          {truncateString(`${address} ${commune} ${city}`, 60)}
        </p>
        <p className="border-t border-gray-200 ">
          {_renderItem(data?.currency?.name, data?.currency?.isoCode, data.price)}
        </p>
        <div className="w-100 flex justify-end">
          <Link
            to={`/propiedades/${id}?statusId=${company.statusId}&companyId=${company.companyId}`}
            className="inline-flex rounded-full items-center px-3 py-2 text-sm font-medium text-center text-white hover:shadow-lg bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300"
            target='_blank'
          >
            Ver detalles
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
    </div>
  );
};

export default PropertyCard;
