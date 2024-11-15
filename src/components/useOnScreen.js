import { useEffect, useState } from 'react';

const useOnScreen = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Stop observing once visible
      }
    });

    // Store the current ref value in a variable
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the stored variable
      }
    };
  }, [ref]);

  return isVisible;
};

export default useOnScreen;