import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
// import NavbarMenu from 'components/NavbarAuth/NavbarMenu/NavbarMenu';
import Contacts from 'components/Contacts/Contacts';
import LoginPage from 'pages/LoginPage/LoginPage';
// import Home from 'components/Home/Home';

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>Load page...</p>}>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;