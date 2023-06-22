import React, { Fragment, useState } from 'react';
import ToastComponent from '../../Toastify/ToastComponent';
import { toast } from 'react-toastify';
import { icons } from '../../Icons';
import styles from '../../../styles/Section/Inicio/Form.module.css';
import stylesModal from '../../../styles/Modal/Modal.module.css';
import { realtorData } from '../../../constants/consts/realtor';
import { companyForm } from '../../../constants/consts/company';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/** API services */
import ContactFormServices from '../../../services/ContactFormServices';
import ContactApiFormServices from '../../../services/ContactApiFormServices';

const FormMain = ({ titleContentForm, textAlign, subtitle, ...props }) => {
  const [formData, setFormData] = useState({
    name: '',
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

  const { haveAction1, haveAction2 } = { ...props };
  const { FaUserAlt, BsTelephoneFill, MdOutlineMailOutline, GrClose } = icons;

  const handleName = (ev) => {
    setFormData({ ...formData, name: ev.target.value });
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

  const handleMessage = (ev) => {
    setFormData({ ...formData, message: ev.target.value });
  };

  const handleSubject = (ev) => {
    setFormData({ ...formData, subject: ev.target.value });
  };

  const handleTermsAndConditions = (ev) => {
    setFormData({
      ...formData,
      termsAndConditions: !formData.termsAndConditions,
      message: ev.target.value === '' ? '' : 'Solicitud de información',
      subject: ev.target.value === '' ? '' : 'Solicitud de información',
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      action: '',
      termsAndConditions: false,
      message: '',
      subject: '',
      lastName: '',
      meetingDate: new Date(),
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        [
          formData.name,
          formData.email,
          formData.phone,
          formData.action,
        ].includes('') ||
        formData.termsAndConditions === false
      ) {
        showToastErrorMsg('Todos los campos son obligatorios');
        return;
      }

      setIsLoading(true);
      const response = await ContactFormServices.sendContactForm(
        'Aulen Propiedades',
        formData?.name,
        formData?.email,
        formData?.phone,
        formData?.action,
        realtorData?.email
      );

      // Main Form
      const formDataFormatted = {
        companyId: companyForm.id,
        name: formData?.name,
        email: formData?.email,
        phone: formData?.phone,
        action: formData?.action,
        message: 'No definido',
        subject: 'No definido',
        termsAndConditions: formData.termsAndConditions,
        lastName: 'No definido',
        meetingDate: 'No definido',
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
      showToastErrorMsg('Ha ocurrido un error al enviar el formulario');
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <div>
        {props?.show ? (
          <div
            className={stylesModal.closeModal}
            onClick={() => props?.setIsModalOpen(!props.isModalOpen)}
          >
            <span>
              <GrClose />
            </span>
          </div>
        ) : (
          ''
        )}

        <form
          className={styles.form}
          onSubmit={handleSubmit}
          id="planForm"
          name="FormSubmit"
        >
          <h3
            style={{
              textAlign: textAlign || 'left',
            }}
          >
            {titleContentForm}
          </h3>
          {subtitle === '' ? '' : <p>{subtitle}</p>}

          <Form.Group className={styles.formGroup}>
            <Form.Label className={styles.label}>
              <FaUserAlt />
            </Form.Label>
            <Form.Control
              className={styles.formControl}
              placeholder="Nombre"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleName}
            />
          </Form.Group>

          <Form.Group className={styles.formGroup}>
            <Form.Label className={styles.label}>
              <BsTelephoneFill />
            </Form.Label>
            <Form.Control
              className={styles.formControl}
              placeholder="Teléfono celular"
              type="text"
              name="phone"
              id="phone"
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
              id="email"
              value={formData.email}
              onChange={handleEmail}
            />
          </Form.Group>

          <div
            style={{
              display: 'none',
            }}
          >
            <input
              type="text"
              id="action"
              name="action"
              value={formData.action}
              onChange={() =>
                setFormData({ ...formData, action: formData.value })
              }
            />
          </div>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Al continuar estás aceptando los términos y condiciones y la
            política de privacidad."
              className={styles.formCheck}
              checked={formData.termsAndConditions}
              onChange={handleTermsAndConditions}
            />
          </Form.Group>

          <Row className={styles.rowBtnForm}>
            {!!haveAction1 && (
              <Col sm={12} lg={6}>
                <Form.Group className={styles.formGroup}>
                  <Button
                    type="submit"
                    className={styles.btnSubmit}
                    name="action"
                    id="button"
                    onClick={() => {
                      setFormData({ ...formData, action: 'quiero vender' });
                    }}
                  >
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
                      haveAction1?.text
                    )}
                  </Button>
                </Form.Group>
              </Col>
            )}

            {!!haveAction2 && (
              <Col sm={12} lg={6}>
                <Form.Group className={styles.formGroup}>
                  <Button
                    type="submit"
                    onClick={() =>
                      setFormData({ ...formData, action: 'quiero arrendar' })
                    }
                    className={styles.btnSubmit}
                    name="action"
                    id="button"
                    value={formData.action}
                  >
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
                      haveAction2?.text
                    )}
                  </Button>
                </Form.Group>
              </Col>
            )}
          </Row>
        </form>
      </div>

      <ToastComponent />
    </Fragment>
  );
};

export default FormMain;
