import { useState, useEffect } from "react";

export const useDisplay = ({
  MOBILE_BREAKPOINT = 768,
}: {
  MOBILE_BREAKPOINT: number;
}) => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const updateIsMobile = () => {
      setIsMobile(mql.matches);
    };

    // Initial check
    updateIsMobile();

    // Add listener
    mql.addEventListener("change", updateIsMobile);

    return () => {
      mql.removeEventListener("change", updateIsMobile);
    };
  }, [MOBILE_BREAKPOINT]);

  return isMobile;
};

export default useDisplay;
