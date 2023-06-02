import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import ToastComponent from '../Toastify/ToastComponent';
import { toast } from 'react-toastify';
import { icons } from '../Icons';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../../styles/Forms/MeetingSchedule.module.css';
import stylesToast from '../../styles/Toastify/toastContainer.module.css';
import { realtorData } from '../../constants/consts/realtor';
import { company } from '../../constants/consts/company';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

/** API services */
import ContactFormServices from '../../services/ContactFormServices';
import ContactApiFormServices from '../../services/ContactApiFormServices';

const MeetingSchedule = () => {
  const { FaUserAlt, BsTelephoneFill, MdOutlineMailOutline, BsCalendarCheck } =
    icons;
  const [serverErrorMsg, setServerErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    action: '',
    termsAndConditions: false,
    message: '',
    subject: '',
    lastName: '',
    meetingDate: new Date(),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    allFieldRequierd: '',
    serverEmailError: '',
  });

  const handleName = (ev) => {
    setFormData({ ...formData, name: ev.target.value });
  };

  const handleLastName = (ev) => {
    setFormData({ ...formData, lastName: ev.target.value });
  };

  const handleEmail = (ev) => {
    setFormData({ ...formData, email: ev.target.value });
  };

  const handlePhone = (ev) => {
    setFormData({ ...formData, phone: ev.target.value });
  };

  const handleAction = (ev) => {
    setFormData({ ...formData, action: ev.target.value });
  };

  const handleTermsAndConditions = (ev) => {
    setFormData({
      ...formData,
      termsAndConditions: !formData.termsAndConditions,
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      action: '',
      termsAndConditions: false,
      message: '',
      subject: '',
      meetingDate: new Date(),
    });
  };

  const showToastSuccessMsg = (msg) => {
    toast.success(msg, {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const showToastErrorMsg = (msg) => {
    toast.error(msg, {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const showToastWarningMsg = (msg) => {
    toast.warn(msg, {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  /** On form submit */
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      if (
        [
          formData.name,
          formData.lastName,
          formData.phone,
          formData.email,
        ].includes('')
      ) {
        showToastErrorMsg('Todos los campos son obligatorios');
        return;
      }

      setIsLoading(true);
      const response = await ContactFormServices.sendContactMeetingForm(
        'Aulen Propiedades',
        formData?.name,
        formData?.lastName,
        formData?.phone,
        formData?.meetingDate,
        formData?.email,
        realtorData?.email // tu correo de prueba
      );

      const formDataFormatted = {
        companyId: company.companyId,
        name: formData?.name,
        email: formData?.email,
        phone: formData?.phone,
        action: 'Agenda de reunión',
        message: '...',
        subject: '...',
        termsAndConditions: true,
        lastName: formData?.lastName,
        meetingDate: 'No definida',
      };

      const apiResponse = await ContactApiFormServices.addContactForm(
        formDataFormatted
      );

      if (response.success === 'true' && apiResponse.status === 'ok') {
        setIsLoading(false);
        setErrorMsg({
          allFieldRequierd: '',
          serverEmailError: '',
        });
        resetForm();
        showToastSuccessMsg(
          `Solicitud enviada exitosamente, dentro de poco de contactaremos`
        );
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      setServerErrorMsg(error.response);
      showToastWarningMsg('Ocurrio un error al enviar el formulario');
    }
  };

  return (
    <div className={styles.scheduleContainer}>
      <div className={styles.scheduleHeading}>
        <h2>¿Quieres agendar una reunión con nosotros?</h2>
        <p>Un equipo de expertos se pondra en contacto contigo.</p>
      </div>
      <form name="FormSubmit" onSubmit={handleSubmit}>
        <Row>
          <Col sm={12} md={6}>
            <Form.Group className={styles.formGroup}>
              <Form.Label className={styles.label}>
                <FaUserAlt />
              </Form.Label>
              <Form.Control
                type="text"
                className={styles.formControl}
                placeholder="Nombre"
                name="name"
                value={formData.name}
                onChange={handleName}
              />
            </Form.Group>

            <Form.Group className={styles.formGroup}>
              <Form.Label className={styles.label}>
                <BsTelephoneFill />
              </Form.Label>
              <Form.Control
                type="text"
                className={styles.formControl}
                placeholder="Teléfono celular"
                name="phone"
                value={formData.phone}
                onChange={handlePhone}
              />
            </Form.Group>

            <Form.Group className={styles.formGroup}>
              <Form.Label className={styles.label}>
                <MdOutlineMailOutline />
              </Form.Label>
              <Form.Control
                type="email"
                className={styles.formControl}
                placeholder="Correo electrónico"
                name="email"
                value={formData.email}
                onChange={handleEmail}
              />
            </Form.Group>
          </Col>

          <Col sm={12} md={6}>
            <Form.Group
              className={styles.formGroup}
              controlId="formBasicLastName"
            >
              <Form.Label className={styles.label}>
                <FaUserAlt />
              </Form.Label>
              <Form.Control
                type="text"
                className={styles.formControl}
                placeholder="Apellido"
                name="lastName"
                value={formData.lastName}
                onChange={handleLastName}
              />
            </Form.Group>

            <Form.Group className={styles.formGroup}>
              <Form.Label className={styles.label}>
                <BsCalendarCheck />
              </Form.Label>
              <DatePicker
                selected={formData.meetingDate}
                onChange={(date) =>
                  setFormData({
                    ...formData,
                    meetingDate: date,
                  })
                }
                name="meetingDate"
                timeInputLabel="Time:"
                dateFormat="MM/dd/yyyy h:mm aa"
                showTimeInput
                className={styles.datePickerCustom}
                placeholderText="Fecha y hora de la reunión"
              />
            </Form.Group>
          </Col>

          <Row className={styles.scheduleBtn}>
            <Col sm={12} lg={6}>
              <Form.Group className={styles.formGroup}>
                <button type="submit" className={styles.btnSubmit}>
                  {isLoading ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="inline w-4 h-4 text-gray-100 animate-spin fill-white"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Cargando...</span>
                    </div>
                  ) : (
                    'Agenda una reunión'
                  )}
                </button>
              </Form.Group>
            </Col>
          </Row>
        </Row>
      </form>

      {/* ToastComponent Msg */}
      <div className={stylesToast.toastContainer}>
        <ToastComponent />
      </div>
    </div>
  );
};

export default MeetingSchedule;
