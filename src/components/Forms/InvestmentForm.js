import React, { Fragment, useState } from 'react';
import ToastComponent from '../Toastify/ToastComponent';
import { toast } from 'react-toastify';
import houseImg from '../../assets/img/SoyPropietario/house.jpg';
import { icons } from '../Icons';
import styles from '../../styles/Forms/InvestmentForm.module.css';

/** API services */
import ContactFormServices from '../../services/ContactFormServices';
import ContactApiFormServices from '../../services/ContactApiFormServices';
import { realtorData } from '../../constants/consts/realtor';
import { companyForm } from '../../constants/consts/company';

const InvestmentForm = ({ formData, isForm }) => {
  const [serverErrorMsg, setServerErrorMsg] = useState('');
  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
    termsAndConditions: true,
    companyId: companyForm.id,
    action: 'Contacto desde Unidades en Remate',
    message: '...',
    subject: '...',
    lastName: '...',
    meetingDate: 'No indicada',
  });

  const { h2, h3, btn } = formData;
  const { FaUserAlt, BsTelephoneFill, MdOutlineMailOutline } = icons;

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    allFieldRequierd: '',
    serverEmailError: '',
  });

  const handleName = (ev) => {
    setData({ ...data, name: ev.target.value });
  };

  const handleEmail = (ev) => {
    setData({ ...data, email: ev.target.value });
  };

  const handlePhone = (ev) => {
    setData({ ...data, phone: ev.target.value });
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

  const resetForm = () => {
    setData({
      name: '',
      phone: '',
      email: '',
      termsAndConditions: false,
      companyId: companyForm.id,
      action: 'Quiero que me contacten (Administración de arriendo)',
      message: '...',
      subject: '...',
      lastName: '...',
      meetingDate: 'No indicada',
    });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (
      [data?.name, data?.phone, data?.email].includes('') ||
      data.termsAndConditions === false
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
        data?.name,
        data?.email,
        data?.phone,
        realtorData?.email
      );

      const apiResponse = await ContactApiFormServices.addContactForm(data);

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
      <form
        name="FormSubmit"
        onSubmit={handleSubmit}
        className={`${styles.customRow} ${styles.mainContainer}`}
      >
        <div className={`${styles.customRow} ${styles.submainContainer}`}>
          <img className={styles.image} src={houseImg} alt="imagen-house" />
          <div className={`${styles.customCol} ${styles.form}`}>
            <header className={`${styles.customCol} ${styles.form__header}`}>
              <h2>{formData.h2}</h2>
              <h3>{formData.h3}</h3>
            </header>
            {isForm ? (
              <main className={`${styles.customCol} ${styles.form__inputs}`}>
                <div
                  className={`${styles.customRow} ${styles.form__inputs__name}`}
                >
                  <FaUserAlt className={styles.formIcon} />
                  <input
                    type="text"
                    className={styles.formControl}
                    placeholder="Nombre"
                    name="name"
                    value={data.name}
                    onChange={handleName}
                  />
                </div>
                <div
                  className={`${styles.customRow} ${styles.form__inputs__tel}`}
                >
                  <BsTelephoneFill className={styles.formIcon} />
                  <input
                    type="phone"
                    className={styles.formControl}
                    placeholder="Teléfono celular"
                    name="phone"
                    maxLength={9}
                    value={data.phone}
                    onChange={handlePhone}
                  />
                </div>
                <div
                  className={`${styles.customRow} ${styles.form__inputs__email}`}
                >
                  <MdOutlineMailOutline className={styles.formIcon} />
                  <input
                    type="email"
                    className={styles.formControl}
                    placeholder="Correo electrónico"
                    name="email"
                    value={data.email}
                    onChange={handleEmail}
                  />
                </div>
              </main>
            ) : null}

            <button
              type="submit"
              className={styles.form__btn}
              onClick={() => {
                setData({ ...data, action: 'vender' });
              }}
            >
              {/* {isForm ? formData.btn : 'Agenda una reunión'} */}
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
              ) : isForm ? (
                formData.btn
              ) : (
                'Agenda una reunión'
              )}
            </button>
          </div>
        </div>
      </form>

      <ToastComponent />
    </Fragment>
  );
};

export default InvestmentForm;
