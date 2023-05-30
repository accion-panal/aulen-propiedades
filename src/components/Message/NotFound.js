import React from 'react';
import ButtonPrimary from '../Button/ButtonPrimary';
import { icons } from '../Icons';
import '../../styles/Message/NotFound.module.css';

const NotFound = ({ message }) => {
  const { BiErrorCircle } = icons;
  return (
    <div className="container-message flex flex-col">
      <span className="flex items-center">
        <BiErrorCircle className="mb-0.3 mr-[2px]" />
        {message}
      </span>
      <ButtonPrimary
        onClick={() => window.location.reload()}
        className="text-blue-500 hover:text-blue-600"
      >
        Restablecer búsqueda
      </ButtonPrimary>
    </div>
  );
};

export default NotFound;
