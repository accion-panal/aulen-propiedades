import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  Popup,
} from 'react-map-gl';
import { PropertiesContext } from '../../../context/properties/PropertiesContext';
import Section from '../../Section/Section';
import MarkerIcon from '../../../assets/img/Map/marker.png';
import {truncateString, parseToCLPCurrency, ufToClp, clpToUf2, parseToDecimal } from '../../../utils';
import { company } from '../../../constants/consts/company';
import { icons } from '../../Icons';

const PropertiesInMapComponent = () => {
  const { contextData } = useContext(PropertiesContext);
  const { propertiesInMap, data, valueUf} = contextData;
  const [selectedProperty, setSelectedProperty] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [totalItems, setTotalItems] = useState('');
  const { FaMapMarkerAlt } = icons;


  useEffect(() => {
    if (propertiesInMap.length > 0) {
      setIsLoading(false);
    }
  }, [propertiesInMap, isLoading]);


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
      <div>
        <p>
          <span className="mr-1">UF: </span>{' '}
          <strong>
            {parseToDecimal(ufValue)}
          </strong>
        </p>
        <p>
          <span className="mr-1">CLP: </span>{' '}
          <strong>
            {parseToCLPCurrency(clpValue)}
          </strong>
        </p>
      </div>
    )
  }

  return (
    <Section>
      <div className="container mt-[90px] xl:mt-[130px]">
        <div className="mb-10">
          <h1 className="text-xl">Localización de Propiedades </h1>{' '}
          <p
            style={{
              fontSize: '1rem',
              fontWeight: '300',
              color: '#616161',
            }}
          >
            Descubre propiedades es una forma fácil y eficiente de encontrar y
            explorar propiedades en una ubicación específica
          </p>
          <p className="text-orange-500 text-sm">Propiedades activas en mapa</p>
        </div>

        <div>
          <Map
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            initialViewState={{
              pitch: 45,
              width: 400,
              height: 400,
              attributionControl: false,
              longitude: -70.64827,
              latitude: -33.45694,
              zoom: 10,
              style: {
                width: 'auto',
                height: '80vh',
                borderRadius: '15px',
              },
            }}
            mapStyle={'mapbox://styles/mapbox/streets-v12'}
            style={{
              width: 'auto',
              height: '80vh',
              borderRadius: '15px',
            }}
          >
      {propertiesInMap?.map((property) => {
              let longitude =
                Number(property?.LngLat?.match(/Lng: ([-\d.]+)/)[1]) ?? null;
              let latitude =
                Number(property?.LngLat?.match(/Lat: ([-\d.]+)/)[1]) ?? null;
                      

        const image = property?.image;
        // Validador de extension .jpg / .png/ .jpeg  para las imgs
        const validaImage = (image) => {
          if (image) {
            const validExtensions = ['.jpg', '.jpeg', '.png'];
        
            if (validExtensions.some(ext => image.toLowerCase().endsWith(ext))) {
              return (
                <img
                src={image}
                alt={`small-card-${property?.title}`}
                className="h-[200px] w-[100%] object-cover rounded-t-xl xl:rounded-none"
              />
              );
            }
          }
          return (
            <img
            src={`https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg`}
            alt={`small-card-${property?.title}`}
            className="h-[200px] w-[100%] object-cover rounded-t-xl xl:rounded-none"
          />
          );
        };

              
              return (
                <Marker
                  key={property?.id}
                  longitude={longitude}
                  latitude={latitude}
                  offsetLeft={-20}
                  offsetTop={-10}
                  style={{
                    cursor: 'pointer',
                    zIndex: 0,
                    margin: '0',
                    padding: '0',
                  }}
                >
                  <div>
                    <img
                      src={MarkerIcon}
                      alt="marker"
                      height={50}
                      width={50}
                      onClick={() =>
                        setSelectedProperty((prev) =>
                          prev && prev.id === property.id ? false : property
                        )
                      }
                    />

                    {selectedProperty &&
                      selectedProperty.id === property.id && (
                        <Popup
                          longitude={longitude}
                          latitude={latitude}
                          onClose={() => setSelectedProperty(true)}
                          anchor="bottom"
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
                          <Link
                            to={`/propiedades/${property?.id}?statusId=${company.statusId}&companyId=${company.companyId}`}
                          >
                            <div className="max-w-sm bg-white">
                              {/* <img
                                src={`https://aulen.partnersadvisers.info/properties/secure-imgs/Imagenes//${property?.id}//1.jpg`}
                                alt={`small-card-${property?.title}`}
                                className="h-[200px] w-[100%] object-cover rounded-t-xl xl:rounded-none"
                              /> */}
                              {validaImage(image)}

                              <div className="mt-3">
                                <span className="bg-orange-500 text-white px-2 py-.5 mt-1 rounded-full">
                                  {property?.operation || ""} / {property?.types?.[0] ?? 'Propiedad'}
                                </span>
                                <p className="mb-3 mt-2 font-normal text-gray-700 flex items-center">
                                  <FaMapMarkerAlt className="mr-1" />
                                  {property?.address ??
                                    'Dirección no registrada'}{' '}
                                  ,{' '}
                                  {property?.commune ?? 'Comuna no registrada'}{' '}
                                  , {property?.city ?? 'Ciudad no registrada'}
                                </p>

                                

                                <div className="text-gray-600">
                                  <span>Desde:</span>{' '}
                                  <strong>
                                    {/* {parseToCLPCurrency(property?.price || 0) ??
                                      ''} */}
                                    {_renderItem(property?.currency?.name, property?.currency?.isoCode, property.price)}

                                  </strong>
                                </div>

                                <div className="text-gray-500">
                                  <span>
                                    {`${property?.surface_m2}`} m<sup>2</sup>{' '}
                                    utiles -{property?.bedrooms} dorms.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </Popup>
                      )}
                  </div>
                </Marker>
              );
            })}
            <NavigationControl />
            <GeolocateControl />
            <FullscreenControl />
          </Map>
        </div>
      </div>
    </Section>
  );
};

export default PropertiesInMapComponent;
