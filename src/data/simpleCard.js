import styles from '../styles/Section/soy-inversionista/unidades-nuevas/SimpleCard/SimpleCard.module.css';

export const simpleCardData = [
  {
    img: (
      <img
        className={`${styles.card__img}`}
        src={require('../assets/img/SoyPropietario/apartment.jpg')}
        alt="card-imagen-departamentos"
      />
    ),
    title: 'departamento',
    href: '#departamento',
    operationType: 'venta',
    typeOfProperty: 'departamento',
  },
  {
    img: (
      <img
        className={`${styles.card__img}`}
        src={require('../assets/img/SoyPropietario/house.jpg')}
        alt="card-imagen-estacionamientos"
      />
    ),
    title: 'estacionamiento',
    href: '#estacionamientos',
    operationType: 'venta',
    typeOfProperty: 'estacionamiento',
  },
  {
    img: (
      <img
        className={`${styles.card__img}`}
        src={require('../assets/img/SoyPropietario/storageroom.jpg')}
        alt="card-imagen-bodega"
      />
    ),
    title: 'bodega',
    href: '#bodega',
    operationType: 'venta',
    typeOfProperty: 'bodega',
  },
];
