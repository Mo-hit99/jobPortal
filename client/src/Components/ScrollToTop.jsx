// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation} from 'react-router';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top smoothly on every location change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
