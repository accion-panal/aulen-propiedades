import React from 'react';
import Head from '../../Head/Head';
import Section from '../Section';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const ErrorImg =
    'https://res.cloudinary.com/dvdb33uyj/image/upload/v1684524487/Projects/accion-panal/img/404/webp/404Image_mawxoj.webp';
  return (
    <>
      <Head title="404 Página no encontrada" />
      <div className="flex justify-center items-center container h-screen mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="col-span-2 sm:col-auto">
            <p className='text-2xl uppercase font-semibold my-9 md:mx-24 relative before:absolute before:content-[""] before:left-0 before:bottom-0 before:h-3 before:w-2/4 before:border-b-4 before:border-orange-400'>
              OOPS!
            </p>
            <h2 className="text-panal-cyan text-2xl xl:text-5xl uppercase mt-3 text-orange-500">
              404 - Página no encontrada
            </h2>
            <p className="my-5">
              Es posible que la página que busca haya sido eliminada, haya
              cambiado de nombre o no esté disponible temporalmente.
            </p>
            <p className="my-5">
              <Link to="/" className="text-orange-500 hover:text-orange-600">
                <strong>Pulse aquí para volver a la página de inicio</strong>
              </Link>
            </p>
          </div>
          <div className="col-span-2 sm:col-auto">
            <img src={ErrorImg} alt="404-img" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
