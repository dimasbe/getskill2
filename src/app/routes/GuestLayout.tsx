import { Outlet } from 'react-router-dom';
import Navbar from '../../components/protected/guest/Navbar';

const GuestLayout = () => {
  return (
    <>
      <div className="guest-layout">
          <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default GuestLayout;
