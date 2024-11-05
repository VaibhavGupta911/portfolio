import React from "react";
import { VStack, Box, useColorModeValue } from "@chakra-ui/react";
import PropTypes from 'prop-types';

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  const textColor = useColorModeValue(
    isDarkBackground ? "white" : "gray.800",
    isDarkBackground ? "gray.100" : "white"
  );

  return (
    <Box
      backgroundColor={boxProps.backgroundColor}
      color={textColor}
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...boxProps}
    >
      <VStack
        maxWidth="1280px"
        width="100%"
        height="100%"
        padding={["4", "6", "8"]}
        spacing={8}
      >
        {children}  
      </VStack>
    </Box>
  );
};

FullScreenSection.propTypes = {
  children: PropTypes.node.isRequired,
  isDarkBackground: PropTypes.bool,
};

FullScreenSection.defaultProps = {
  isDarkBackground: false,
};

export default FullScreenSection;