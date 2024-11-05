import React, { useState, useEffect } from "react";
import { Box, HStack, IconButton, Collapse, VStack, Text } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error(`Element with id "${id}" not found.`);
    }
  };

  return (
    <Box
      position="fixed"
      zIndex="dropdown"
      top={0}
      left={0}
      right={0}
      backgroundColor="#075E54"
      padding="0.5rem 1rem"
      boxShadow={scrollY > 0 ? "md" : "none"}
      transition="box-shadow 0.3s ease-in-out"
    >
      <HStack
        justifyContent="space-between"
        alignItems="center"
        maxW="1200px"
        mx="auto"
      >
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="white"
          cursor="pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          My Portfolio
        </Text>

        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
          colorScheme="teal"
          variant="ghost"
          size="lg"
          display={{ md: "none" }}
        />

        <Collapse in={isOpen} animateOpacity>
          <VStack
            spacing={4}
            alignItems="flex-start"
            display={{ base: "flex", md: "none" }}
            backgroundColor="#075E54"
            width="100%"
            padding={4}
            borderRadius="md"
          >
            {["projects", "certifications", "skills", "experience"].map((item) => (
              <Text
                key={item}
                onClick={handleClick(item)}
                fontWeight="bold"
                fontSize="lg"
                color="white"
                _hover={{ color: "gray.200", cursor: "pointer" }}
                width="100%"
                textAlign="left"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Text>
            ))}
          </VStack>
        </Collapse>

        <HStack
          spacing={8}
          display={{ base: "none", md: "flex" }}
        >
          {["projects", "certifications", "skills", "experience"].map((item) => (
            <Text
              key={item}
              onClick={handleClick(item)}
              fontWeight="bold"
              fontSize="lg"
              color="white"
              _hover={{ color: "gray.200", cursor: "pointer", borderBottom: "2px solid white" }}
              transition="color 0.2s ease-in-out, border-bottom 0.2s ease-in-out"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Text>
          ))}
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;