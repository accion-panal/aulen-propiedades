import Home from '../pages/Home';
import Properties from '../pages/Properties/Properties';
import Property from '../pages/Properties/Property';
import ToSell from '../pages/Owner/ToSell';
import ToLease from '../pages/Owner/ToLease';
import AuctionUnits from '../pages/Investor/AuctionUnits';
import NewUnits from '../pages/Investor/NewUnits';
import LeaseAdmin from '../pages/AdminLease';
import PropertiesInMap from '../pages/PropertiesInMap';

export const navigationRoutes = [
  {
    id: 1,
    name: 'Aulen',
    path: '/',
    element: <Home />,
  },
  {
    id: 2,
    name: 'Propiedades',
    path: '/propiedades',
    element: <Properties />,
  },
  {
    id: 3,
    name: 'Propiedad',
    path: '/propiedades/:id',
    element: <Property />,
  },
  {
    id: 4,
    name: 'Quiero Vender',
    path: '/soy-propietario/quiero-vender',
    element: <ToSell />,
  },
  {
    id: 5,
    name: 'Quiero Arrendar',
    path: '/soy-propietario/quiero-arrendar',
    element: <ToLease />,
  },
  {
    id: 6,
    name: 'Unidades en Remate',
    path: '/soy-inversionista/unidades-en-remate',
    element: <AuctionUnits />,
  },
  {
    id: 7,
    name: 'Unidades Nuevas',
    path: '/soy-inversionista/unidades-nuevas',
    element: <NewUnits />,
  },
  {
    id: 8,
    name: 'Administracion de Arriendo',
    path: '/administracion-de-arriendo',
    element: <LeaseAdmin />,
  },
  {
    id: 9,
    name: 'Propiedades en mapa',
    path: '/propiedades/propiedades-en-mapa',
    element: <PropertiesInMap />,
  },
];
