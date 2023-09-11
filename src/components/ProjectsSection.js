import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "🍋 Little Lemon Restaurant Website Meta Frontend Develpoment Capstone Project",
    description:
      "🍋 Little Lemon Restaurant: React.js, Formik. Explore a responsive, interactive dining experience. Tech: React.js, CSS, HTML, JS",
    getImageSrc: () => require("../images/little lemon.jpg"),
    url: 'https://vaibhavgupta911.github.io/little-lemon-resturant/',
    gitlink:'https://github.com/VaibhavGupta911/little-lemon-resturant',
 
  },
  {
    title: "Little Lemon Restaurant Figma Meta Frontend Develpoment Capstone Project ",
    description:
      "Step into the creative journey of Little Lemon Restaurant! Delve into meticulously crafted wireframes, lifelike prototypes, and comprehensive user requirements, all thoughtfully developed to curate an unparalleled dining experience. Immerse yourself in the visual transformation from conceptual sketches to engaging interactive interfaces.",
    getImageSrc: () => require("../images/figma1.jpg"),
    url: 'https://www.figma.com/file/b6PHQpqb0R9W7UA9eWYx86/Little-Lemon?type=design&node-id=14%3A212&mode=design&t=0SuDJiZFud89MAtt-1',
    gitlink:'https://www.figma.com/file/b6PHQpqb0R9W7UA9eWYx86/Little-Lemon?type=design&node-id=14%3A212&mode=design&t=0SuDJiZFud89MAtt-1',
  },
  {
    title: "Portfolio for Meta Frontend Develpoment Course Assignment",
    description:
      "Nav Bar with Social media links and quick scroll button , picture of student Featured Project , Contact Form & footer made using Chakara UI Formik forms yup React hooks etc",
    getImageSrc: () => require("../images/photo1.png"),
    url: 'https://vaibhavgupta911.github.io/portfolio-react-proj/',
    gitlink:'https://github.com/VaibhavGupta911/portfolio-react-proj',
  },
  {
    title: "Little Lemon UI",
    description:
      "As a Part of Meta Frontend development Course Assignment I made Little Lemon UI UX Using Figma which includes(User persona, Wireframe,Basic Running Phototype, Journey Map)",
    getImageSrc: () => require("../images/photo2.jpg"),
    url: 'https://www.figma.com/file/LYe8AM7c9SexkBOnIWXxbC/Little-Lemon-Project?type=design&node-id=0%3A1&mode=design&t=13QPxkRHikdINFqQ-1',
    gitlink:'https://www.figma.com/file/LYe8AM7c9SexkBOnIWXxbC/Little-Lemon-Project?type=design&node-id=0%3A1&mode=design&t=13QPxkRHikdINFqQ-1',
  },
  {
    title: "E Commerce Website",
    description:
      "E Commerce Website made using HTML CSS JavaScript as a part of Internship & Training with InternsElite · Internship",
    getImageSrc: () => require("../images/photo3.jpg"),
    url: 'https://vaibhavgupta911.github.io/e-com/',
    gitlink:'https://github.com/VaibhavGupta911/e-com',
  },
  {
    title: "ToDo List",
    description:
      "Todo List made using React Chakara UI CSS HTML JavaScript project includes List Button and Dark Mode Button",
    getImageSrc: () => require("../images/photo4.jpg"),
    url: 'https://vaibhavgupta911.github.io/todolist/',
    gitlink:'https://github.com/VaibhavGupta911/todolist',
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
       gridGap={2}
      
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
            git={project.gitlink}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
