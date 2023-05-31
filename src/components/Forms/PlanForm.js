import React, { Fragment, useState } from 'react';
import ToastComponent from '../Toastify/ToastComponent';
import { toast } from 'react-toastify';
import { icons } from '../Icons';
import styles from '../../styles/Forms/PlanForm.module.css';
import stylesToast from '../../styles/Toastify/toastContainer.module.css';
import stylesModal from '../../styles/Forms/PlanForm.module.css';

/** Bootstrap components */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

/** API services */
import ContactFormServices from '../../services/ContactFormServices';
import { realtorData } from '../../constants/consts/realtor';

const PlanFrom = ({ props }) => {
 const { FaUserAlt, BsTelephoneFill, MdOutlineMailOutline, GrClose } = icons;
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
    const handlePhone = (phone) => {
    setFormData({
      ...formData,
      phone: phone,
      });
    };



    /** Update Email */
    const handleEmail = (email) => {
    setFormData({
      ...formData,
      email: email,
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


  /** On form submit */
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if(
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
    
    try{
      setLoading(true);
      const response = await ContactFormServices.sendOwnerInfo(
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
    } catch (error){
      showToastErrorMsg('Ha ocurrido un error al enviar el formulario');
      console.log('error', error);
    }

  };

  return (
    <Fragment>
      <div>
        {props?.show ? (
          <div
            className={stylesModal.closeModal}
            onClick={() => props.setIsModalOpen(!props.isModalOpen)}
          >
            <span>
              <GrClose />
            </span>
          </div>
        ) : (
          ''
        )}

        <Form className={styles.form} onSubmit={handleSubmit} id="planForm">
          <h3>¡Despreocúpate por tú propiedad de inversión!</h3>
          <p>Completa el formulacio y entérate como</p>
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

          <Form.Group
            className={`${styles.formGroup && styles.formGroupCheck}`}
            controlId="formBasicCheckbox"
          >
            <Form.Check
              type="checkbox"
              label="Al continuar estás aceptando los términos y condiciones y la
            política de privacidad."
              className={styles.formCheck}
              name="termsAndConditions"
              checked={formData.terms}
              onChange={handleVerification}
            />
          </Form.Group>

          <Col sm={12} lg={12}>
            <Form.Group className={styles.formGroup}>
              <Button
                type="submit"
                value="Send"
                className={styles.btnSubmit}
              >
                Quiero que me contacten
              </Button>
            </Form.Group>
          </Col>
          <ToastComponent />
        </Form>

        
      </div>
    </Fragment>
  );
};

export default PlanFrom;
