import React from 'react';
import styles from '../../../../styles/Section/properties/details/TableDetails.module.css';

/* Bootstrap components */
import Table from 'react-bootstrap/Table';

const TableDetails = ({ propertyData }) => {
  const { surface_m2, bedrooms, bathrooms , highlighted, status} = propertyData;

  return (
    <Table striped bordered className={styles.tableDetails}>
      <tbody>
        <tr>
          <th>Superficie útil</th>
          <td className="bg-white">
            {surface_m2 === null ? 'sin registro en' : surface_m2} m<sup>2</sup>
          </td>
        </tr>
        <tr>
          <th>Dormitorios</th>
          <td>{bedrooms === null ? 'sin registro' : bedrooms}</td>
        </tr>
        <tr>
          <th>Baños</th>
          <td>{bathrooms === null ? 'sin registro' : bathrooms}</td>
        </tr>
        <tr>
          <th>Destacada</th>
          <td>{highlighted === false ? 'no destacada': highlighted}</td>
          {/* <td>{deliveryDate || ''}</td> */}
        </tr>
        <tr>
          <th>Estado del Proyecto</th>
          <td>{status !== null ? status : "sin registro"}</td>
          {/* <td>{projectStatus || ''}</td> */}
        </tr>
      </tbody>
    </Table>
  );
};

export default TableDetails;
