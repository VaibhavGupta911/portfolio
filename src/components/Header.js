import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, Flex, HStack, Spacer } from "@chakra-ui/react";



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
    position='fixed'//for having nabbar always above fixed not scroalled
    zIndex='dropdown' //for putting all content scroll below the navbar
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
      
          
          justifyContent='space-between'
          alignItems="center"
          display='flex'
          flexDirection='row'
          

        //  alignItems='stretch'
        > <a
        href="#projects"
        onClick={handleClick("projects")}
        className="link-hover boldertext lefttext"
      
        
      >
        Projects
      </a>
      <a
        href="#certifications"
        onClick={handleClick("Certification")}
        className="link-hover boldertext"
      >
        Certification
      </a>
      <a
        href="#skills"
        onClick={handleClick("skills")}
        className="link-hover boldertext righttext"
      >
        Skills
      </a>

          {/* <nav>
            Add social media links based on the `socials` data 
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
          </nav> */}
      
      
       
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
