import Photo from '../images/Photo5.jpg'//always import image in top
import resume from '../images/Resume1.pdf'
import React from "react";
import { Avatar, Box, Button, Flex,  Heading, Image, List, ListIcon, ListItem, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { FaCss3, FaFigma, FaHtml5, FaJava, FaReact, FaMeta, FaGithub } from "react-icons/fa6";
import course from '../images/Coursera.jpg'
import amazon from '../images/Amazon logo.png'
import { SiChakraui } from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
//import { motion } from "framer-motion";
const greeting = "Hi,I'm Vaibhav Gupta!";
const bio1 = "A Frontend Developer";
const bio2 = "Specialised in React";
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

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  // backgroundColor='white'
  >
    <VStack spacing={6} py='6' marginTop='6'>
      <VStack>

        <Avatar src={Photo}
          shadow='dark-lg'
          size='2xl'
          name='Vaibhav Gupta'
          m='4'
        />
      </VStack>

      <Heading as='h4' size='md'>{greeting}</Heading>
      <VStack spacing={6} >


        <Heading as='h3' size='xl' >{bio1}</Heading>
        <Heading as='h3' size='xl'>{bio2}</Heading>
        <a href={resume} download="Vaibhav_Gupta_Resume" >
          {/* <motion.div
      
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
   >  */}
          <Button shadow='dark-lg'
            // variant='solid'
            colorScheme='whatsapp' size='md'>
            Download Resume
          </Button>

          {/* </motion.div> */}
        </a>
      </VStack>
      {/* <motion.div
      className="box"
      
      whileHover={{ scale: [null, 1.2, 1.1] }}
      transition={{ duration: 0.5 }}
    > */}
      <Flex justifyContent='space-evenly' alignItems='center'  >
        {
          socials.map((e) =>
            <a href={e.url} key={e.url} className="link-hover ">
              <FontAwesomeIcon
                icon={e.icon}
                size="2x"
              />
            </a>
          )
        }
      </Flex>

      <Flex justifyContent="center"
        alignItems="center"
        flexWrap='wrap'
        justify='space-between'
      >

        <Box
          m='4' p='4'
          //backgroundColor="#14532d"
          backgroundColor='#075E54'
          borderRadius='2xl'
          shadow='dark-lg'
          id="skills-section"
        >
          <VStack p='1' m='1' marginRight='6' marginLeft='6'>
            <Heading as="h3" size='md' >
              Skills
            </Heading>
            <List spacing='2' fontSize='md'  >
              <ListItem>
                <ListIcon ><FaReact size="2x" />
                </ListIcon>
                React
              </ListItem>
              <ListItem>
                <ListIcon><FaJava size="2x" /></ListIcon>
                JavaScript</ListItem>
              <ListItem>
                <ListIcon><FaCss3 size="2x" /></ListIcon>
                Cascading Style Sheets (CSS)
              </ListItem>

              <ListItem>
                <ListIcon><FaHtml5 size="2x" /></ListIcon>
                HTML</ListItem>
              <ListItem>
                <ListIcon><FaFigma size="2x" /></ListIcon>
                Figma Software</ListItem>
              <ListItem>
                <ListIcon><FaGithub size="2x" /></ListIcon>
                GitHub</ListItem>
              <ListItem>
                <ListIcon ><SiChakraui size="2x" /></ListIcon>
                Chakra-UI</ListItem>

            </List>

          </VStack>

        </Box>
        {/* </motion.div> */}
        {/* <motion.div
      className="box"
      
      whileHover={{ scale: [null, 1.5, 1.3] }}
      transition={{ duration: 0.5 }}
    >   */}
        <Box
          // marginLeft='1'

          //backgroundColor="#14532d"
          backgroundColor='#075E54'
          borderRadius='2xl'
          shadow='dark-lg'
          className='Certification-section'
          id='Certification-section'

        // m='4' p='4'

        >
          <VStack p='2' m='2' >
            <Heading as="h3" size='md' >
              Certification
            </Heading>

            <List fontSize='md'   >
              <ListItem>
                <a href='https://www.coursera.org/account/accomplishments/specialization/certificate/P6YEQ6K7HRNX' >
                  <ListIcon ><FaMeta size="2x" /></ListIcon>
                  Meta Front-End Developer Certification
                </a>
              </ListItem>
            </List>
            {/*<Box boxSize='sm' alignContent='center' alignItems='center'>   </Box> */}
            <a href='https://www.coursera.org/account/accomplishments/specialization/certificate/P6YEQ6K7HRNX' >
              <Image src={course} alt='meta front end deveplomnet course ' borderRadius='2xl' height='200px' />
            </a>
          </VStack>
        </Box>
        <Box
          // marginLeft='1'

          //backgroundColor="#14532d"
          backgroundColor='#075E54'
          borderRadius='2xl'
          shadow='dark-lg'
          className='Experience-section'
          id='Experience-section'
          m='4'

        >
          <VStack p='2' m='2' >
            <Heading as="h3" size='md' >
              Experience
            </Heading>

            <List fontSize='md'   >
              <ListItem>Quality Associate LMAQ Nov,2023-Present</ListItem>
            </List>
            {/*<Box boxSize='sm' alignContent='center' alignItems='center'>   </Box> */}

            <Image src={amazon} alt='meta front end deveplomnet course ' borderRadius='2xl' height='200px' />
            
          </VStack>
        </Box>

      </Flex>
      {/* </motion.div> */}
    </VStack>
  </FullScreenSection>
);
export default LandingSection;
