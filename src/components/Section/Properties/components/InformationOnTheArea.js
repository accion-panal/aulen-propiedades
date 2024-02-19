import React from 'react';
import ReactMap from '../../../Map/ReactMap';

/* Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../../../styles/Section/properties/details/InformationOnTheArea.module.css';

const InformationOnTheArea = ({ propertyData, valueUf }) => {
  const { LngLat } = propertyData;
  // const lng = (Number(LngLat?.match(/Lng: ([-\d.]+)/)[1]) || -70.64827) || (Number(LngLat?.match(/Lng: ([-\d.]+)/)[0]) || -70.64827)  ;
  // const lat = (Number(LngLat?.match(/Lat: ([-\d.]+)/)[1]) || -33.45694) || (Number(LngLat?.match(/Lat: ([-\d.]+)/)[0]) || -33.45694);

  const lng =  -70.64827;
  const lat = -33.45694;

  if(propertyData && propertyData.LngLat){

    const lngMatch = propertyData.LngLat.match(/Lng: ([-\d.]+)/);
    const latMatch = propertyData.LngLat.match(/Lat: ([-\d.]+)/);

    if(latMatch && latMatch[1]){
      lat = Number(latMatch[1]);
    }
    if(lngMatch && lngMatch[1]){
      lng = Number(lngMatch[1]);
    }

  }


  return (
    <div className={styles.informationOnTheAreaContainer}>
      <Row>
        <Col xs={12} lg={12}>
          <ReactMap
            longitudeProp={lng}
            latitudeProp={lat}
            propertyData={propertyData}
            valueUf={valueUf}
          />
        </Col>
      </Row>
    </div>
  );
};

export default InformationOnTheArea;
