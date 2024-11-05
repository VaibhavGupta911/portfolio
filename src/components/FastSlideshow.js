import React, { useState, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";

// Array of image paths
const images = [
  "/images/photo3.jpg","/images/photo3.jpg","/images/photo3.jpg","/images/photo3.jpg","/images/photo3.jpg",
  "/images/photo2.jpg"
  // Add more images as needed
];

const FastSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set interval to change images at a fast pace (e.g., 200ms)
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 200); // Change every 200ms for fast pace

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      position="relative"
      width="300px" // Adjust size as needed
      height="300px"
      overflow="hidden"
      borderRadius="md"
      boxShadow="md"
    >
      <Image
        src={images[currentIndex]}
        alt="Slideshow Image"
        width="100%"
        height="100%"
        objectFit="cover"
        transition="opacity 0.2s ease-in-out" // Smooth transition
      />
    </Box>
  );
};

export default FastSlideshow;
