import Photo from '../images/Photo5.jpg'//always import image in top
import resume from '../images/Resume1.pdf'
import React from "react";
import { Avatar, Box, Button, Heading, Image, List, ListIcon, ListItem, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { FaCss3, FaFigma, FaHtml5, FaJava, FaReact, FaMeta } from "react-icons/fa6";
import course from '../images/Coursera.jpg'
import { SiChakraui } from "react-icons/si";

const greeting = "Hello, I am Vaibhav Gupta!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={6} py='6'>
      <Avatar src={Photo}
        shadow='dark-lg'
        size='2xl'
        name='Vaibhav Gupta'
        m='4'
      />
      <Heading as='h4' size='md'>{greeting}</Heading>
      <VStack spacing={6} >
        <Heading as='h3' size='xl' >{bio1}</Heading>
        <Heading as='h3' size='xl'>{bio2}</Heading>
        <a href={resume} download="Vaibhav Gupta Resume" >
          <Button shadow='dark-lg'
            // variant='solid'
            colorScheme='whatsapp' size='md'>
            Download Resume
          </Button>
        </a>
      </VStack>
      <Box
        m='4' p='4'
        //backgroundColor="#14532d"
        backgroundColor='#075E54'
        borderRadius='2xl'
        shadow='dark-lg'
        id="skills-section"
      >
        <VStack p='1' m='1'>
          <Heading  as="h3" size='md' >
            Skills
          </Heading>
          <List spacing='2' fontSize='md'  >
            <ListItem>
              <ListIcon ><FaReact size="2x" />
              </ListIcon>
              React
            </ListItem>
            <ListItem>
              <ListIcon><FaCss3 size="2x" /></ListIcon>
              Cascading Style Sheets (CSS)
            </ListItem>
            <ListItem>
              <ListIcon><FaJava size="2x" /></ListIcon>
              JavaScript</ListItem>
            <ListItem>
              <ListIcon><FaHtml5 size="2x" /></ListIcon>
              HTML</ListItem>
            <ListItem>
              <ListIcon><FaFigma size="2x" /></ListIcon>
              Figma</ListItem>
            <ListItem>
              <ListIcon ><SiChakraui size="2x" /></ListIcon>
              Chakra-UI</ListItem>
          </List>

        </VStack>

      </Box>
      <Box
     marginLeft='1'
     margin='1'
        //backgroundColor="#14532d"
        backgroundColor='#075E54'
        borderRadius='2xl'
        shadow='dark-lg'
        className='Certification-section'
        id='Certification-section'
      >
        <VStack p='2'm='2' >
          <Heading as="h3" size='md' >
            Certification
          </Heading>
          <List spacing='2' fontSize='md'   >
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
    </VStack>
  </FullScreenSection>
);
export default LandingSection;
