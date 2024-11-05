import { Heading, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import PropTypes from 'prop-types';

const Card = ({ title, description, imageSrc, url, git }) => {
  return (
    <VStack
      color='black'
      background='#f8f8f8'
      borderRadius='xl'
      boxShadow='md'
      _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }} // Hover effect
      transition='0.3s'
    >
      <Link href={url} isExternal cursor='pointer'>
        <Image src={imageSrc} alt={title} borderTopRadius='xl' />
      </Link>
      <VStack spacing={4} p={3} alignItems='flex-start'>
        <HStack>
          <Heading as='h3' size='sm' fontWeight='semibold' textAlign='left'>
            {title}
          </Heading>
        </HStack>
        <Text color='#64748b' fontSize='small' textAlign='left'>
          {description}
        </Text>
        <HStack>
          <Link href={git} isExternal>
            <Text fontSize='lg' display='flex' alignItems='center'>
              <FontAwesomeIcon icon={faGithub} size='1x' />
              <span> See more </span>
              <ExternalLinkIcon mx='2px' />
            </Text>
          </Link>
        </HStack>
      </VStack>
    </VStack>
  );
};

// Prop Types for validation
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  git: PropTypes.string.isRequired,
};

export default Card;