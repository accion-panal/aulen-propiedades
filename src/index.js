import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PropertiesProvider from './context/properties/PropertiesProvider';
import SelectsProvider from './context/selects/SelectsProvider';
import ClientsProvider from './context/clients/ClientsProvider';
import LayoutPage from './components/LayoutPage/LayoutPage';
import { BrowserRouter } from 'react-router-dom';

/** Style Deps */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <LayoutPage>
      <ClientsProvider>
        <SelectsProvider>
          <PropertiesProvider>
            <App />
          </PropertiesProvider>
        </SelectsProvider>
      </ClientsProvider>
    </LayoutPage>
  </BrowserRouter>
);

reportWebVitals();
