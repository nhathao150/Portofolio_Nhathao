import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const useAOS = (options = {}) => {
  useEffect(() => {
    const defaultOptions = {
      once: true,
      offset: 10,
      duration: 1000,
      easing: 'ease-in-out',
      ...options
    };

    AOS.init(defaultOptions);

    // Cleanup function
    return () => {
      AOS.refresh();
    };
  }, [options]);

  return AOS;
};

export default useAOS;
