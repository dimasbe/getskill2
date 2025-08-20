import { Outlet } from 'react-router-dom';
import Navbar from '../../components/protected/guest/Navbar';
import '../../assets/css/main.css';
import '../../assets/css/animate.min.css';
import '../../assets/css/aos.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/default-icons.css';
import '../../assets/css/flaticon-skillgro-new.css';
import '../../assets/css/flaticon-skillgro.css';
import '../../assets/css/fontawesome-all.min.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/odometer.css';
import '../../assets/css/plyr.css';
import '../../assets/css/select2.min.css';
import '../../assets/css/spacing.css';
import '../../assets/css/swiper-bundle.min.css';
import '../../assets/css/tg-cursor.css';


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
