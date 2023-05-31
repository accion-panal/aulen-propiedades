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
import { realtorData } from '../../constants/consts/realtor';

const OwnerLeaseForm = () => {
  const { FaUserAlt, BsTelephoneFill, MdOutlineMailOutline } = icons;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    terms: false,
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


    /** Update phone */
  const handlePhone = (phone) => {
    setFormData({
      ...formData,
      phone: phone,
      });
    };

  const onSubmit = (data) => {
    // console.log(data);
  };
  /** Update CHECKBOX */
  const handleVerification = (ev) => {
    setFormData({
        ...formData,
        terms: ev.target.checked,
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

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (
        [
          formData?.name,
          formData?.phone,
          formData?.email,
        ].includes('') ||
        formData.terms === false
    ) {
        showToastErrorMsg(
            'Todos los campos son obligatorios, y debes aceptar los terminos y condiciones'
        );
        return;
    }

    try {
        setLoading(true);
        const response = await ContactFormServices.sendOwnerLease(
            formData?.name,
            formData?.phone,
            formData?.email, 
            realtorData?.email
        );

        if ((await response.success) === 'true') {
            setLoading(false);
            setErrorMsg({
                allFieldRequierd: '',
                serverEmailError: '',
            });
            showToastSuccessMsg(
                `Solicitud enviada exitosamente, dentro de poco de contactaremos`
            );
            setTimeout(() => {
                window.location.reload();
            }, 4000);
        }
    } catch (error) {
        showToastErrorMsg('Ha ocurrido un error al enviar el formulario');
        console.log('error', error);
    }
};
  return (
    <Fragment>
      <Fade delay={200} direction="right" cascade>
        <Form className={styles.form} onSubmit={handleSubmit} id="planForm">
          <h2 className={styles.pusblishingFormH2} >
            ¡Despreocúpate por tu propiedad de inversión!
          </h2>
          <h3 className={styles.pusblishingFormH3}>
            Completa el formulario y enterate como
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
            />-
          </Form.Group>

          <Form.Group className={styles.formGroup} controlId="formBasicPhone">
            <Form.Label className={styles.label}>
              <BsTelephoneFill />
            </Form.Label>
            <Form.Control
              type="text"
              className={styles.formControl}
              placeholder="Teléfono celular"
              name="phone"
              pattern="[0-9]{9}"
              maxLength="9"
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
               id="terms"
               name="terms"
              label="Al continuar estás aceptando los términos y condiciones y la
            política de privacidad."
              className={styles.formCheck}
              checked={formData.terms}
              onChange={handleVerification}
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
              <Button
                type="submit"
                value="Send"
                className={styles.btnSubmit}
              >
                Quiero arrendar
              </Button>
            </Form.Group>
          </Col>
          <div className={stylesToast.toastContainer}>
          <ToastComponent />
        </div>
        </Form>

       
      
      </Fade>
    </Fragment>
  );
};

export default OwnerLeaseForm;
