import React, { Fragment, useState } from 'react';
import ToastComponent from '../Toastify/ToastComponent';
import { toast } from 'react-toastify';
import houseImg from '../../assets/img/SoyPropietario/house.jpg';
import { icons } from '../Icons';
import styles from '../../styles/Forms/InvestmentForm.module.css';

/** API services */
import ContactFormServices from '../../services/ContactFormServices';
import { realtorData } from '../../constants/consts/realtor';

const InvestmentForm = ({ formData, isForm }) => {
  const [serverErrorMsg, setServerErrorMsg] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
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


  const onFormSubmit = async (ev) => {
    ev.preventDefault();
    if (
        [
          data?.name,
          data?.phone,
          data?.email,
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
        const response = await ContactFormServices.sendUnitAuctionForm(
            data?.name,
            data?.phone,
            data?.email, 
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
      <form
        onSubmit={onFormSubmit}
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
                    type="text"
                    className={styles.formControl}
                    placeholder="Teléfono celular"
                    name="phone"
                    pattern="[0-9]{9}"
                    maxLength="9"
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
              {isForm ? formData.btn : 'Agenda una reunión'}
            </button>
          </div>
        </div>
      </form>

      <ToastComponent />
    </Fragment>
  );
};

export default InvestmentForm;
