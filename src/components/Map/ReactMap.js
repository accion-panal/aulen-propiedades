import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  Popup,
} from 'react-map-gl';
import CardMap from './CardMap';
import { icons } from '../Icons';

const ReactMap = ({ longitudeProp, latitudeProp, propertyData, props, valueUf}) => {
  const [showPopup, setShowPopup] = useState(false);
  const { FaMapMarkerAlt } = icons;

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: latitudeProp,
    longitude: longitudeProp,
  });

  const handleViewportChange = (newViewport) => {
    setViewport(newViewport);
  };

  const handleMarkerDrag = (event) => {
    setViewport({
      ...viewport,
      latitude: latitudeProp,
      longitude: longitudeProp,
    });
  };

  useEffect(() => {
    setViewport((prevViewport) => ({
      ...prevViewport,
      latitude: latitudeProp,
      longitude: longitudeProp,
      zoom: 15,
    }));
  }, []);

  return (
    <div className="container my-24">
      <div>
        <h3>
          <Link
            to={`/propiedades/propiedades-en-mapa`}
            className="flex  uppercase items-center justify-center rounded-lg py-2 text-lg font-medium text-center text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300"
          >
            <FaMapMarkerAlt className="mr-2" /> Ver mapa
          </Link>
        </h3>

        <h4 className="flex ml-2 xl:ml-5 items-center my-5 text-gray-600">
          <span>
            <FaMapMarkerAlt className="mr-2" />
          </span>
          Ubicación: {propertyData?.address || 'Dirección no registrada'} ,
          {propertyData?.commune || 'Comuna no registrada'},{' '}
          {propertyData?.city || 'Ciudad no registrada'}
        </h4>

        {/* <Link to="/" className="ml-2 xl:ml-5 text-blue-500 text-sm">
          Ver información de la zona
        </Link> */}
      </div>

      <Map
        mapboxAccessToken={
          'pk.eyJ1Ijoic2VyZ2lvdmVyYWhlcm5hbmRlemJpZGF0YSIsImEiOiJjbDMwZHc4cmswMDdqM2NydmIzYWF0cGl4In0.hsYQFPebleAB4j6mRckMzQ'
        }
        initialViewState={{
          pitch: 85,
          width: 400,
          height: 900,
          attributionControl: false,
          zoom:10,
          style: {
            width: 'auto',
            height: '80vh',
            borderRadius: '15px',
          },
        }}
        {...viewport}
        onViewportChange={handleViewportChange}
        interactive={true}
        // dragPan={true}
        // dragRotate={true}
        // scrollZoom={true}
        // touchZoom={true}
        // doubleClickZoom={true}
        mapStyle={'mapbox://styles/mapbox/streets-v12'}
        style={{
          margin: '1.5rem 0rem',
          width: 'auto',
          height: '450px',
        }}
      >
        <Marker
          latitude={latitudeProp}
          longitude={longitudeProp}
          draggable={true}
          onDragEnd={handleMarkerDrag}
          onClick={() => setShowPopup(!showPopup)}
          offsetLeft={-20}
          offsetTop={-10}
          style={{
            cursor: 'pointer',
            zIndex: 0,
            margin: '0',
            padding: '0',
          }}
        >
          {showPopup && (
            <Popup
              longitude={longitudeProp}
              latitude={latitudeProp}
              onClose={() => setShowPopup(false)}
              anchor="left"
              closeButton={false}
              closeOnClick={false}
              dynamicPosition={true}
              focusAfterOpen={false}
              offsetTop={-10}
              offsetLeft={-10}
              closeOnMove={false}
              style={{
                zIndex: 100,
                cursor: 'pointer',
              }}
            >
              <CardMap propertyData={propertyData} valueUf={valueUf}/>
            </Popup>
          )}
        </Marker>

        <NavigationControl />
        <GeolocateControl />
        <FullscreenControl />
      </Map>
    </div>
  );
};

export default ReactMap;
