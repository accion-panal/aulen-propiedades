import React from 'react';
import ButtonPrimary from '../Button/ButtonPrimary';
import '../../styles/Message/NotFound.module.css';

const NotFound = ({ message }) => {
  return (
    <div className="container-message flex flex-col justify-center items-center text-center h-25">
      <span className="flex items-center">{message}</span>
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
