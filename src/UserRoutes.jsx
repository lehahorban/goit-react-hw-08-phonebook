import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import RegisterPage from 'pages/RegisterPage/RegisterPage';
// import Contacts from 'components/Contacts/Contacts';
// import LoginPage from 'pages/LoginPage/LoginPage';
import Home from 'components/Home/Home';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const Contacts = lazy(() => import('components/Contacts/Contacts'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>Load page...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
