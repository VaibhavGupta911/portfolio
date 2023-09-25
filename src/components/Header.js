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
      className="box1"
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
      minW='full'
    >
      <Box
        className="box2"
        color="white" width
        backgroundColor="#128C7E"
        margin="0 0">
        <HStack
          px={10}
          py={6}
          justifyContent="space-between"
          alignItems="center"
          display='flex'
          flexDirection='row'
          flexWrap='wrap'

        //  alignItems='stretch'
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}
              padding={3}
              display='flex'
              flexDirection='row'
              justify='space-between'
            >
              {
                socials.map((e) =>
                  <a href={e.url} key={e.url} className="link-hover">
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
            <HStack spacing={8} padding={3} >
              {/* Add links to Project*/}
              <a
                href="#projects"
                onClick={handleClick("projects")}
                className="link-hover"
                display='flex' flexDirection='row' flexWrap='wrap'
              >
                Projects
              </a>
              <a
                href="#certifications"
                onClick={handleClick("Certification")}
                className="link-hover"
              >
                Certification
              </a>
              <a
                href="#skills"
                onClick={handleClick("skills")}
                className="link-hover"
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
