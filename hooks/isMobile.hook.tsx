import React, { useState } from 'react';
import { MOBILE_BREAKPOINT } from '../utils/constant';

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
  }, []);

  React.useEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };
    window.addEventListener('resize', updateSize);

    return (): void => window.removeEventListener('resize', updateSize);
  }, []);

  return isMobile;
};
