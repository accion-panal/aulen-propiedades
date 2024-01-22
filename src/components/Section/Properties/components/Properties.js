import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../../Section';
import { PropertiesContext } from '../../../../context/properties/PropertiesContext';
import PropertiesTop from '../../../Navigation/PropertiesTop';
import PropertyCard from './PropertyCard';
import Pagination from '../../../Pagination';
import AdvancedSearch from '../../../Forms/AdvancedSearch';
import Spinner from '../../../Spinner/Spinner';
import NotFound from '../../../Message/NotFound';
import { icons } from '../../../Icons';
import styles from '../../../../styles/OutstandingProject/OutstandingProject.module.css';
import { truncateStringSmall } from '../../../../utils';
import { company , paginationTopLimit} from '../../../../constants/consts/company';
import { Button } from 'bootstrap';
import ButtonPrimary from '../../../Button/ButtonPrimary';

const Properties = ({ isGrid, isList, setIsGrid, setIsList }) => {
  const { contextData } = useContext(PropertiesContext);
  const {
    properties,
    allProperties,
    setProperties,
    propertiesToShow,
    setPropertiesToShow,
    page,
    totalPages,
    totalItems,
    handlePageChange,
    isLoading,
    notFoundMsg,
    valueUf, 
    setFilterProps, setPage, getProperties
  } = contextData;
  const { RiArrowDownSLine, MdOutlineFilterList, MdOutlineFilterListOff } =
    icons;
  const [showMore, setShowMore] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(true);

  const showMoreProperties = () => {
    const propiedadesActuales = propertiesToShow.length;
    const nuevasPropiedades = allProperties.slice(
      propiedadesActuales,
      propiedadesActuales + 10
    );
    setPropertiesToShow([...propertiesToShow, ...nuevasPropiedades]);

    if (propiedadesActuales + 10 >= allProperties.length) {
      setShowMore(false);
    }
  };

  const handleToggleForm = () => setIsOpenForm(!isOpenForm);

  const seeLessProperties = () => {
    setPropertiesToShow(allProperties.slice(0, 10));
    setShowMore(true);
  };

  const resetSearch = () => {
    setFilterProps('');
    setPage(1);
    getProperties(1, paginationTopLimit.limit, '')
  };

  

  const outstandingProperties = propertiesToShow.filter(
    (property) => property?.highlighted === true
  );

  return (
    <Section>
      <div className="flex relative flex-col w-[100%] lg:w-[90%] xl:w-[80%] mt-[50px] mx-auto">
        <PropertiesTop
          {...{
            totalItems,
            page,
            isGrid,
            setIsGrid,
            isList,
            setIsList,
            properties,
          }}
        />
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-4/5 mb-48 mt-1 xl:mt-0">
            {/* PROPERTIES LIST */}
            {isLoading && <Spinner />}
          
            {notFoundMsg ? (
              <div className="container-message flex flex-col justify-center items-center text-center h-1/2">
                <span className="flex items-center">{notFoundMsg}</span>
                <button onClick={resetSearch} className="relative border-2 border-transparent outline-none focus:outline-none h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  text-blue-500 hover:text-blue-600 " type="button">
                  Restablecer búsqueda
                </button>
              </div>
            ) : ('')}
            <ul
              className={`${
                isGrid
                  ? 'grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 p-2'
                  : 'flex flex-col gap-3'
              }`}
            >
              {properties.map((character) => (
                <PropertyCard
                  key={character.id}
                  data={character}
                  isList={isList}
                  valueUf={valueUf}
                />
              ))}
            </ul>
            {/* PROPERTIES PAGINATION */}
            <div>
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
          {/* ADVANCED SEARCH FORM */}
          <div className="w-full md:w-1/5 bg-white border ml-0 xl:ml-2">
            <button
              onClick={handleToggleForm}
              className="bg-gray-100 w-full mx-auto p-2 hover:bg-gray-200 border-b"
            >
              {isOpenForm ? (
                <span className="flex items-center justify-center text-sm">
                  <MdOutlineFilterListOff className="pr-1 text-xl" />
                  Ocultar filtros
                </span>
              ) : (
                <span className="flex items-center justify-center text-sm">
                  <MdOutlineFilterList className="pr-1 text-xl" />
                  Mostrar filtros
                </span>
              )}
            </button>
            {isOpenForm && <AdvancedSearch {...{ setProperties, page }} />}

            <div className="p-3">
              <h3 className="bg-gray-50 text-sm">Proyectos destacados</h3>

              <ul className="flex w-[100%] flex-wrap relative">
                {outstandingProperties.length > 0 ? (
                  outstandingProperties?.map((propiedad) => (
                    <Link
                      key={propiedad.id}
                      to={`/propiedades/${propiedad?.id}?statusId=${company.statusId}&companyId=${company.companyId}`}
                      className={`${styles.link} relative h-[145px] text-white text-xs w-[45%] sm:w-[45%] lg:w-[45%] xl:w-[45%] m-1`}
                    >
                      <img
                        src={`https://pages-api.panal.house/properties/images//${propiedad?.id}//1.jpg`}
                        alt={`imagen-${propiedad?.title}`}
                        className={styles.outstandingProject__image}
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center',
                          height: '100px',
                          width: '100%',
                        }}
                      />
                      <p className={styles.deptName}>
                        {truncateStringSmall(
                          propiedad?.title || 'Propiedad sin titulo registrado'
                        ) || ''}
                      </p>
                      <span className="bg-orange-500 mt-[40px] absolute p-[1.5px] px-3 -top-[25px] w-auto rounded-full">
                        Cod: {propiedad.id}
                      </span>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm">
                    No se han encontrado proyectos destacados...
                  </p>
                )}
              </ul>

              <div className="flex items-center bg-white">
                <div className="flex-1 border-b bg-white border-gray-200"></div>
                <button
                  onClick={showMoreProperties}
                  className="relative border-none focus:outline-none"
                >
                  {showMore && (
                    <div className="h-11 w-11 rounded-full bg-white border border-gray-200 text-gray-400 hover:text-gray-400 hover:bg-orange-500 cursor-pointer flex items-center justify-center">
                      <RiArrowDownSLine className="text-2xl" />
                    </div>
                  )}
                </button>
                <button
                  onClick={seeLessProperties}
                  className="relative border-none focus:outline-none"
                >
                  {!showMore && propertiesToShow.length >= 10 && (
                    <div className="h-11 w-11 rounded-full bg-bg-transparent border border-gray-200 text-gray-400 hover:text-white hover:bg-orange-500 cursor-pointer flex items-center justify-center">
                      <RiArrowDownSLine className="text-2xl rotate-180" />
                    </div>
                  )}
                </button>
                <div className="flex-1 border-b border-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Properties;
