import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box
      //backgroundColor="#18181b"
      backgroundColor="#128C7E"
    >
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <Text>Vaibhav Gupta • 2023 • Made using React Chakara UI</Text>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
