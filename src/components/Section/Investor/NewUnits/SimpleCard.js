import React, { Fragment, useContext } from 'react';
import { PropertiesContext } from '../../../../context/properties/PropertiesContext';
import { SelectsContext } from '../../../../context/selects/SelectsContext';
import PropertiesServices from '../../../../services/PropertiesServices';
import {
  company,
  paginationTopLimit,
} from '../../../../constants/consts/company';
import styles from '../../../../styles/Section/soy-inversionista/unidades-nuevas/SimpleCard/SimpleCard.module.css';

export const SimpleCard = ({
  img,
  title,
  href,
  operationType,
  typeOfProperty,
}) => {
  const { contextData } = useContext(PropertiesContext);
  const { contextDataSelects } = useContext(SelectsContext);
  const { setProperties, setIsLoading, setNotFoundMsg } = contextData;
  const { selectedSelects, setSelectedSelects } = contextDataSelects;

  const scrollToDown = () => {
    window.scrollTo({
      top: 700,
      behavior: 'smooth',
    });
  };

  const getProperties = async (
    currentPage,
    limit,
    statusId,
    companyId,
    operationType,
    typeOfProperty
  ) => {
    setNotFoundMsg('');
    setIsLoading(true);
    const { data } = await PropertiesServices.getPropertiesByCard(
      currentPage,
      limit,
      codidoUsuarioMaestro,
      statusId,
      companyId,
      operationType,
      typeOfProperty
    );
    setProperties(data);
    setIsLoading(false);
    setNotFoundMsg(
      data.length === 0
        ? 'Lo sentimos, tu busqueda no coincide con nuestros registros'
        : ''
    );
  };

  return (
    <Fragment>
      <button
        onClick={() => {
          scrollToDown();
          setSelectedSelects({
            ...selectedSelects,
            operationType: operationType,
            typeOfProperty: typeOfProperty,
          });
          getProperties(
            paginationTopLimit.limitPage,
            paginationTopLimit.topLimit,
            company.statusId,
            company.companyId,
            operationType,
            typeOfProperty
          );
        }}
        className={`${styles.customCol} ${styles.card}`}
      >
        {img}
        <h3 className={`${styles.card__title}`}>{title}</h3>
      </button>
    </Fragment>
  );
};
export default SimpleCard;
