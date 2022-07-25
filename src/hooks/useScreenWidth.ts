import { useState, useEffect } from 'react';

const useScreenWidth = () => {
  const [width, setWidth] = useState<number>(0);

  const handleGetScreenWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleGetScreenWidth();
    window.addEventListener('resize', handleGetScreenWidth);
    return () => {
      window.removeEventListener('resize', handleGetScreenWidth);
    };
  }, []);

  return width;
};

export default useScreenWidth;

// npm run build
