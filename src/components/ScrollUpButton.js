import React, { useState, useEffect } from 'react';
import { IconButton } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons"; // Import the up arrow icon

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <IconButton
        aria-label="Scroll to top"
        icon={<ArrowUpIcon />}
        onClick={scrollToTop}
        position="fixed"
        bottom="20px"
        right="20px"
        borderRadius="full" // Make it circular
        size="lg" // Adjust size as needed
        colorScheme="red"
        variant="solid"
      />
    )
  );
};

export default ScrollUpButton;