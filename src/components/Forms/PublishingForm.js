import React, { Fragment, useState } from 'react';
import ToastComponent from '../Toastify/ToastComponent';
import { Fade } from 'react-awesome-reveal';
import { icons } from '../Icons';
import { toast } from 'react-toastify';
import styles from '../../styles/Section/Inicio/Form.module.css';
import stylesToast from '../../styles/Toastify/toastContainer.module.css';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/** API services */
import ContactFormServices from '../../services/ContactFormServices';
import ContactApiFormServices from '../../services/ContactApiFormServices';
import { realtorData } from '../../constants/consts/realtor';
import { company, companyForm } from '../../constants/consts/company';

const PublishingForm = () => {
  const { FaUserAlt, BsTelephoneFill, MdOutlineMailOutline } = icons;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    termsAndConditions: false,
    companyId: companyForm.id,
    action: 'Soy Propietario y quiero vender',
    message: '...',
    subject: '...',
    lastName: '...',
    meetingDate: 'No indicada',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    allFieldRequierd: '',
    serverEmailError: '',
  });

  /** Update Name */
  const handleName = (name) => {
    setFormData({
      ...formData,
      name: name,
    });
  };

  /** Update Email */
  const handleEmail = (email) => {
    setFormData({
      ...formData,
      email: email,
    });
  };

  /** Update Email */
  const handlePhone = (phone) => {
    setFormData({
      ...formData,
      phone: phone,
    });
  };

  /** Update CHECKBOX */
  const handleTermsAndConditions = (ev) => {
    setFormData({
      ...formData,
      termsAndConditions: ev.target.checked,
    });
  };

  /** TOAST */
  const showToastSuccessMsg = (msg) => {
    toast.success(msg, {
      position: 'bottom-center',
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
      position: 'bottom-center',
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
      position: 'bottom-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      termsAndConditions: false,
      companyId: companyForm.id,
      action: 'Soy Propietario y quiero vender',
      message: '...',
      subject: '...',
      lastName: '...',
      meetingDate: 'No indicada',
    });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (
      [formData?.name, formData?.phone, formData?.email].includes('') ||
      formData.termsAndConditions === false
    ) {
      showToastErrorMsg(
        'Todos los campos son obligatorios, y debes aceptar los terminos y condiciones'
      );
      return;
    }
    try {
      setLoading(true);
      const response = await ContactFormServices.sendOwnerSell(
        'Aulen Propiedades',
        formData?.name,
        formData?.email,
        formData?.phone,
        realtorData?.email
      );
      const apiResponse = await ContactApiFormServices.addContactForm(formData);

      if (response.success === 'true' && apiResponse.status === 'ok') {
        setLoading(false);
        setErrorMsg({
          allFieldRequierd: '',
          serverEmailError: '',
        });
        showToastSuccessMsg(
          `Solicitud enviada exitosamente, dentro de poco de contactaremos`
        );
        resetForm();
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      showToastErrorMsg('Ha ocurrido un error al enviar el formulario');
      console.log('error', error);
    }
  };
  return (
    <Fragment>
      <Fade delay={200} direction="right" cascade>
        <Form
          name="FormSubmit"
          className={styles.form}
          onSubmit={handleSubmit}
          id="planForm"
        >
          <h2 className={styles.pusblishingFormH2}>
            ¡Despreocúpate por tu propiedad de inversión!
          </h2>
          <h3 className={styles.pusblishingFormH3}>
            COMPLETA EL FORMULARIO Y ENTÉRATE CÓMO
          </h3>
          <Form.Group className={styles.formGroup} controlId="formBasicName">
            <Form.Label className={styles.label}>
              <FaUserAlt />
            </Form.Label>
            <Form.Control
              type="text"
              className={styles.formControl}
              placeholder="Nombre"
              name="name"
              value={formData?.name}
              onChange={(ev) => handleName(ev.target.value)}
            />
          </Form.Group>

          <Form.Group className={styles.formGroup} controlId="formBasicPhone">
            <Form.Label className={styles.label}>
              <BsTelephoneFill />
            </Form.Label>
            <Form.Control
              type="phone"
              className={styles.formControl}
              placeholder="Teléfono celular"
              name="phone"
              maxLength={9}
              value={formData?.phone}
              onChange={(ev) => handlePhone(ev.target.value)}
            />
          </Form.Group>

          <Form.Group className={styles.formGroup} controlId="formBasicEmail">
            <Form.Label className={styles.label}>
              <MdOutlineMailOutline />
            </Form.Label>
            <Form.Control
              type="email"
              className={styles.formControl}
              placeholder="Correo electrónico"
              name="email"
              value={formData?.email}
              onChange={(ev) => handleEmail(ev.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Al continuar estás aceptando los términos y condiciones y la
            política de privacidad."
              className={styles.formCheck}
              checked={formData.termsAndConditions}
              onChange={handleTermsAndConditions}
            />
          </Form.Group>

          <Col
            sm={12}
            lg={6}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              margin: '1rem auto',
            }}
          >
            <Form.Group
              className={styles.formGroup}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Button type="submit" value="Send" className={styles.btnSubmit}>
                {loading ? (
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
                  'Quiero Vender'
                )}
              </Button>
            </Form.Group>
          </Col>
        </Form>

        <div className={stylesToast.toastContainer}>
          <ToastComponent />
        </div>
      </Fade>
    </Fragment>
  );
};

export default PublishingForm;
