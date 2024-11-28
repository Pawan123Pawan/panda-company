// src/hooks/useTitle.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useTitle = (title) => {
  const location = useLocation();

  useEffect(() => {
    // Update the title dynamically
    document.title = title;
  }, [location, title]);
};

export default useTitle;
