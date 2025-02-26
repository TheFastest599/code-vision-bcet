import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { useContext, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Members from './pages/Members';
import Alumni from './pages/Alumni';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import AnimatedBackground from './components/AnimatedBackground';
import { analytics } from './firebase/config';
import { logEvent } from 'firebase/analytics';
import { globalContext } from './context/globalContext';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  if (pathname.startsWith('/events/')) return null;
  useEffect(() => {
    window.scrollTo(0, 0);
    logEvent(analytics, 'page_view', { page_path: pathname });
  }, [pathname]);

  return null;
}
// Hello World

export default function App() {
  const gContext = useContext(globalContext);
  const { updateInfo } = gContext;
  useEffect(() => {
    updateInfo();
  }, []);
  return (
    <Router>
      <AnimatedBackground />
      <ScrollToTop />
      <div className="min-h-screen font-poppins">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:event" element={<Events />} />
          <Route path="/members" element={<Members />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
