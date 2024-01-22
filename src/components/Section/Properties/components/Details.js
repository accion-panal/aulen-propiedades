import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Executive from './Executive';
import { parseToCLPCurrency, clpToUf ,truncateString, ufToClp, clpToUf2, parseToDecimal} from '../../../../utils';
import { icons } from '../../../../components/Icons';
import styles from '../../../../styles/Section/properties/details/Details.module.css';

/** Bootstrap component */
import Button from 'react-bootstrap/Button';

/** Api services */
import ExchangeRateServices from '../../../../services/ExchangeRateServices';

const Details = ({ propertyData , valueUf}) => {
  const [ufCurrentValue, setUfCurrentValue] = useState(0);
  const { BiBuildingHouse, IoBedOutline, FaBath } = icons;

  const getExchangeRateUF = async () => {
    try {
      const response = await ExchangeRateServices.getExchangeRateUF();
      const ufValue = response?.UFs[0]?.Valor;
      const ufValueAsNumber = parseFloat(ufValue.replace(',', '.'));

      setUfCurrentValue(ufValueAsNumber);
    } catch (error) {
      throw error.response;
    }
  };

  useEffect(() => {
    getExchangeRateUF();
  }, [ufCurrentValue]);


  
  const _renderItem = (name,code,price) => {
    let ufValue = price;
    let clpValue = price;

    if(valueUf.Valor !== null){
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
      <div className={styles.pricesContainer}>
      <span>Desde</span>
      <p className={styles.ufPrice}>
        UF: {parseToDecimal(ufValue)}
      </p>
      <p className={styles.clpPrice}>
        CLP:{parseToCLPCurrency(clpValue)}
      </p>
    </div>
    )
  };

  return (
    <Fragment>
      {Object.keys(propertyData).length > 0 ? (
        <section key={propertyData.id} className={styles.detailContainer}>
          <div className={styles.detailsCard}>
            <h2>{propertyData?.operation || "Operación no encontrada"} / {propertyData?.types ?? 'Inmueble no encontrada'}</h2>
            <p className={styles.title}>
              {propertyData?.title ?? 'Titulo no registrado'}
            </p>
            <p className={styles.publishedBy}>
              Publicado por:{' '}
              <span>
                {propertyData?.company || 'Empresa no registrada'}{' '}
              </span>
            </p>

            <p className={styles.publishedBy}>
              REF:{' '}
              <span>
                {propertyData?.id || 'id no registrada'}{' '}
              </span>
            </p>

    
          {_renderItem(propertyData?.currency?.name, propertyData?.currency?.isoCode, propertyData.price)}


            <div className={styles.deptoPropsContainer}>
              <span className={styles.propertyCharacteristics}>
                <strong>
                  <BiBuildingHouse />
                </strong>{' '}
                {propertyData?.surface_m2 ? propertyData?.surface_m2 : '0'} m
                <sup>2</sup> útiles
              </span>

              <span className={styles.propertyCharacteristics}>
                <strong>
                  <IoBedOutline />
                </strong>{' '}
                {propertyData?.bedrooms
                  ? propertyData?.bedrooms
                  : 'Sin dormitorios'}{' '}
                dormitorios
              </span>

              <span className={styles.propertyCharacteristics}>
                <strong>
                  <FaBath />
                </strong>{' '}
                {propertyData?.bathrooms
                  ? propertyData?.bathrooms
                  : 'Sin baños'}{' '}
                baños
              </span>
            </div>
          </div>
        </section>
      ) : null}

      {propertyData?.installment_type === 'En blanco' ||
      propertyData?.installment_type === 'En verde' ? (
        <Link to="#cotizar-contacto" className={styles.quoteBtn}>
          Cotizar
        </Link>
      ) : null}

      <Executive propertyData={propertyData} />
    </Fragment>
  );
};

export default Details;
