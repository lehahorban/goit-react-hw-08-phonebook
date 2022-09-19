import { useEffect } from 'react';
import UserRoutes from 'UserRoutes';
import NavbarMenu from './Navbar/NavbarMenu/NavbarMenu';
import { useDispatch } from 'react-redux';
import { currentOperations } from 'redux/auth/auth-operations';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentOperations());
  }, [dispatch]);
  return (
    <div>
      <NavbarMenu />
      <UserRoutes />
    </div>
  );
}

export default App;
