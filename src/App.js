import AllRoutes from './components/AllRoutes';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import 'react-multi-carousel/lib/styles.css';
import panda from './assets/panda.png';
import 'aos/dist/aos.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import ConsentForm from './pages/home/ConsentForm';
import ScrollToTop from './ScrollToTop';
import { Profiler } from 'react';
import SubNav from './components/header/SubNav';

function onRenderCallback(id, phase, actualDuration) {
  // console.log(`Profiler - ${id}: ${phase} - ${actualDuration}ms`);
}

function App() {
  return (
    <>
      <Profiler id="AppProfiler" onRender={onRenderCallback}>
        <ScrollToTop />
        <ConsentForm />
        <SubNav />
        <Navbar />
        <FloatingWhatsApp
          phoneNumber="+91-962-506-7150"
          accountName="Panda Guys"
          avatar={panda}
          allowEsc
          allowClickAway
          notification
          notificationSound
        />

        <AllRoutes />

        <Footer />
      </Profiler>
    </>
  );
}

export default App;
