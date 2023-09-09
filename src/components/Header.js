import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Spacer } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: guptaayush519@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/VaibhavGupta911",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/vaibhav-gupta-raipur/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      // position='fixed'
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      //  backgroundColor="#18181b"
      backgroundColor="#128C7E"
    >
      <Box color="white" maxWidth="1280px"
        margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        //  alignItems='stretch'
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
              {
                socials.map((e) =>
                  <a href={e.url} key={e.url}>
                    <FontAwesomeIcon
                      icon={e.icon}
                      size="2x"
                    />
                  </a>
                )
              }
            </HStack>
          </nav>
          <Spacer />
          <nav>
            <HStack spacing={8}>
              {/* Add links to Project*/}
              <a
                href="#projects"
                onClick={handleClick("projects")}
              >
                Projects
              </a>
              <a
                href="#certifications"
                onClick={handleClick("Certification")}
              >
                Certification
              </a>
              <a
                href="#skills"
                onClick={handleClick("skills")}
              >
                Skills
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
