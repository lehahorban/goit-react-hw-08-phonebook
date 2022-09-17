import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import RegisterPage from 'pages/RegisterPage';
// import NavbarMenu from 'components/NavbarAuth/NavbarMenu/NavbarMenu';
import Contacts from 'components/Contacts/Contacts';

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>Load page...</p>}>
      <Routes>
        {/* <Route path="/" element={<NavbarMenu />} /> */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contacts" element={<Contacts />} />
        {/* <Route path="/login" element={<RegisterPage />} />
        <Route path="/contacts" element={<RegisterPage />} /> */}
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
