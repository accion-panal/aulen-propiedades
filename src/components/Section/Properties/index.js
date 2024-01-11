import React, { useState } from 'react';
import Properties from './components/Properties';
import SelectsProvider from './../../../context/selects/SelectsProvider';
import PropertiesProvider from './../../../context/properties/PropertiesProvider';

const PropertiesComponent = () => {
  const [isGrid, setIsGrid] = useState(true);
  const [isList, setIsList] = useState(false);
  return (
    <div>
      <SelectsProvider>
        <PropertiesProvider>
            <Properties {...{ isGrid, isList, setIsGrid, setIsList }} />
        </PropertiesProvider>
      </SelectsProvider>
    </div>

  );
};

export default PropertiesComponent;
