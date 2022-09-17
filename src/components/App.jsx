import UserRoutes from 'UserRoutes';
import NavbarMenu from './NavbarAuth/NavbarMenu/NavbarMenu';

function App() {
  return (
    <div>
      <NavbarMenu />
      <UserRoutes />
      {/* <Contacts /> */}
    </div>
  );
}

export default App;
