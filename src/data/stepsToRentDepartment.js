import { icons } from '../components/Icons';

const {
  TbChecklist,
  FaTools,
  MdOutlineVerified,
  FaHandHoldingUsd,
  BiTimer,
  ImArrowRight,
} = icons;

export const stepsToRentDepartmentData = [
  {
    id: 1,
    desc: 'Elige un plan',
    span: 'que se adapte a tus necesidades',
    icon: <TbChecklist />,
    extraIcon: {
      set: true,
      arrow: <ImArrowRight />,
    },
  },
  {
    id: 2,
    desc: 'Arrendamos tu propiedad',
    span: 'en tiempo récord',
    icon: <BiTimer />,
    extraIcon: {
      set: true,
      arrow: <ImArrowRight />,
    },
  },
  {
    id: 3,
    desc: 'Gestionamos las reparaciones',
    span: 'de tu propiedad',
    icon: <FaTools />,
  },
  {
    id: 4,
    desc: 'Verificación de pago',
    span: 'de servicios y gastos comunes',
    icon: <MdOutlineVerified />,
    extraIcon: {
      set: true,
      arrow: <ImArrowRight />,
    },
  },
  {
    id: 5,
    desc: 'Recibe el pago de tu arriendo',
    span: 'los primeros 5 días de cada mes',
    icon: <FaHandHoldingUsd />,
  },
];
