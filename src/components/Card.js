import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    // <a href="https://vaibhavgupta911.github.io/portfolio-react-proj/"></a>
    <VStack
      color='black' background='white'
      borderRadius='xl' cursor='pointer'
    >
      <a href={url}>
        <Image src={imageSrc} borderRadius='xl' />
        <VStack spacing={4} p={4} alignItems='flex-start'>
          <HStack> {/*horizontal means new line here */}
            <Heading as='h3' size='md'>
              {title}
            </Heading>
          </HStack>
          <Text color='#64748b' fontSize='lg' >
            {description}
          </Text>
          <HStack >{/*horizontal means new line here */}
            <p>See more</p>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </VStack>
      </a>
    </VStack>

  );
};

export default Card;
