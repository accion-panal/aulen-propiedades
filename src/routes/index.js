import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { navigationRoutes } from '../data/routes';
import NotFound from '../components/Section/404/404';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Pages */}
      {navigationRoutes.map(({ id, name, path, element }) => (
        <Route key={id} name={name} path={path} element={element} />
      ))}

      {/* Page 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
