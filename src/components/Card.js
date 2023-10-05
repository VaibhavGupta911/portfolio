import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";
const Card = ({ title, description, imageSrc, url, git }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    // <a href="https://vaibhavgupta911.github.io/portfolio-react-proj/"></a>
   
   
 
   
    <VStack
      color='black'/* background='white'*/
      background='#f8f8f8'
      borderRadius='xl'
    >
      <a href={url} cursor='pointer' >
        <Image src={imageSrc} 
        borderTopRadius='xl'
        />
      </a>
      <VStack spacing={4} p={3} alignItems='flex-start'>
        <HStack> {/*horizontal means new line here */}
          <Heading as='h3' size='sm' fontWeight='semibold' textAlign='left' >
            {title}
          </Heading>
        </HStack>
        <Text color='#64748b' fontSize='small' textAlign='left' /*textAlign='justify'*/>
          {description}
        </Text>
        <HStack >{/*horizontal means new line here */}
          <a href={git} cursor='pointer' isExternal>
            <Text fontSize='lg'>
              <FontAwesomeIcon
                icon={faGithub}
                size='1x'
              /> See more 
              {/* <FontAwesomeIcon icon={faArrowRight} size="1x" />
               */}
             <ExternalLinkIcon mx='2px' />

              </Text>
          </a>
        </HStack>
      </VStack>
    </VStack>   
  );
};

export default Card;
