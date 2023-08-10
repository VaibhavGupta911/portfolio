import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Portfolio for Meta Frontend Develpoment Course Assignment",
    description:
      "Nav Bar with Social media links and quick scroll button , picture of student Featured Project , Contact Form & footer made using Chakara UI Formik forms yup React hooks etc",
    getImageSrc: () => require("../images/photo1.png"),
    url:'https://vaibhavgupta911.github.io/portfolio-react-proj/',
  },
  {
    title: "Little Lemon UI",
    description:
      "As a Part of Meta Frontend development Course Assignment I made Little Lemon UI UX Using Figma which includes(User persona, Wireframe,Basic Running Phototype, Journey Map)",
    getImageSrc: () => require("../images/photo2.jpg"),
    url:'https://www.figma.com/file/LYe8AM7c9SexkBOnIWXxbC/Little-Lemon-Project?type=design&node-id=0%3A1&mode=design&t=13QPxkRHikdINFqQ-1',
  },
  {
    title: "E Commerce Website",
    description:
      "E Commerce Website made using HTML CSS JavaScript as a part of Internship & Training with InternsElite · Internship",
    getImageSrc: () => require("../images/photo3.jpg"),
    url:'https://vaibhavgupta911.github.io/e-com/',
  },
  {
    title: "ToDo List",
    description:
      "Todo List made using React Chakara UI CSS HTML JavaScript project includes List Button and Dark Mode Button",
    getImageSrc: () => require("../images/photo4.jpg"),
    url:'https://vaibhavgupta911.github.io/todolist/',
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
     backgroundColor="#14532d"
     //backgroundColor='#075E54'
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
