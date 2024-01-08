import axios from 'axios';
import { parseRealtorDate } from '../utils';

const ContactFormServices = {
  sendFormToUser: async (name, userEmail, phone, uniqueCode) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${userEmail}`,
      {
        Nombre: name,
        Telefono: phone,
        Correo: userEmail,
        Codigo: uniqueCode,
        '_subject': 'De: Aulenpropiedades.',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },

  sendFormToRealtor: async (
    name,
    userEmail,
    phone,
    realtorEmail,
    propertyType,
    bedrooms,
    bathrooms,
    surfaceM2,
    commonExpenses,
    parkingLots,
    haveWarehouse,
    address
  ) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Desde: 'Aulen Propiedades',
        Nombre: name,
        Correo: userEmail,
        Telefono: phone,
        Tipo_de_propiedad: propertyType,
        Dormitorios: bedrooms,
        Banos: bathrooms,
        Superficie: surfaceM2,
        Gastos_comunes: commonExpenses,
        Estacionamientos: parkingLots,
        Incluye_bodega: haveWarehouse,
        Direccion: address,
        '_subject': 'De: Aulen propiedades.'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },

  sendContactForm: async (
    from,
    name,
    userEmail,
    phone,
    action,
    realtorEmail
  ) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Desde: from,
        Nombre: name,
        Correo: userEmail,
        Telefono: phone,
        Razon: action,
        '_subject': 'De: Contacto Aulen propiedades.'

      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },

  sendContactMeetingForm: async (
    from,
    name,
    lastName,
    phone,
    meetingDateTime,
    email,
    realtorEmail
  ) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Desde: from,
        Nombre: `${name} ${lastName}`,
        Telefono: phone,
        Fecha_y_Hora_Reunion: parseRealtorDate(meetingDateTime ?? new Date()),
        Correo: email,
        '_subject': 'De: Meeting contacto.'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },

  //Formulario soy propietario quiero vender
  sendOwnerSell: async (from, name, userEmail, phone, realtorEmail) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Desde: from,
        Nombre: name,
        Correo: userEmail,
        Telefono: phone,
        Mensaje: 'Es propietario o Inversionista',
        '_subject': 'De: Soy propietario/Quiero vender.',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },

  //Formulario soy propietario quiero arrendar
  sendOwnerLease: async (name, userEmail, phone, realtorEmail) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Nombre: name,
        Correo: userEmail,
        Telefono: phone,
        Mensaje: 'Es propietario y quiere arrendar',
        '_subject': 'De: Soy propietario/Quiero arrendar.'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },

  //Formulario Administracion de arriendo
  sendOwnerInfo: async (name, phone, userEmail, realtorEmail) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Nombre: name,
        Correo: userEmail,
        Telefono: phone,
        Mensaje: 'Es propietario y quiere obtener información',
        '_subject': 'De: Soy propietario/Quiero información.'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },

  //Formulario Unidades de remate
  sendUnitAuctionForm: async (name, phone, userEmail, realtorEmail) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Nombre: name,
        Correo: userEmail,
        Telefono: phone,
        Mensaje:
          'Es inversionista y quiere más información en las unidades de remate',
        '_subject': 'De: Soy inversionista/ quiero información.'

      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },

  // Formulario Unidades nuevas
  sendContactUnidad: async (
    name,
    lastname,
    userEmail,
    phone,
    date,
    time,
    realtorEmail
  ) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Nombre: name,
        Apellido: lastname,
        Correo: userEmail,
        Telefono: phone,
        Fecha: date,
        Hora: time,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },

  // Quienes somos form
  sendContactAboutForm: async (
    name,
    userEmail,
    reason,
    message,
    realtorEmail
  ) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Nombre: name,
        Correo: userEmail,
        Soy: reason,
        Mensaje: message,
        '_subject': 'De: Contacto.'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },
};

export default ContactFormServices;
