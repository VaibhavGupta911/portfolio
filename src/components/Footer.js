import React from "react";
import { Box, Container, Text, Link, HStack, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const bgColor = useColorModeValue("teal.500", "teal.600");
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" bg={bgColor} color="white" py={4}>
      <Container maxW="container.lg">
        <HStack justifyContent="space-between" flexWrap="wrap">
          <Text>
            &copy; {currentYear} Vaibhav Gupta. All rights reserved.
          </Text>
          <HStack spacing={4}>
            <Link href="https://github.com/VaibhavGupta911" isExternal>
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/vaibhav-gupta-raipur/" isExternal>
              LinkedIn
            </Link>
            <Text>Made with React & Chakra UI</Text>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;