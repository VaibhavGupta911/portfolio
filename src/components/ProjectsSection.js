/*import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box,  Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Express Travelers",
    description:
      "Landing Page of Express Travelers made using Bootstrap JavaScript HTML CSS",
    getImageSrc: () => require("../images/photo11.jpg"),
    url: 'https://vaibhavgupta911.github.io/bswebsite/',
    gitlink: 'https://github.com/VaibhavGupta911/bswebsite',

  },
  {
    title: "🍋Little Lemon Restaurant Website Meta Frontend Develpoment Capstone Project",
    description:
      "🍋Little Lemon Restaurant: React.js,Formik.Explore a responsive,interactive dining experience. Tech: React.js, CSS, HTML, JS",
    getImageSrc: () => require("../images/little lemon.jpg"),
    url: 'https://vaibhavgupta911.github.io/little-lemon-resturant/',
    gitlink: 'https://github.com/VaibhavGupta911/little-lemon-resturant',

  },

  {
    title: "Portfolio for Meta Frontend Develpoment Course Assignment",
    description:
      "Nav Bar with Social media links and quick scroll button , picture of student Featured Project , Contact Form & footer made using Chakara UI Formik forms yup React hooks etc",
    getImageSrc: () => require("../images/photo1.png"),
    url: 'https://vaibhavgupta911.github.io/portfolio-react-proj/',
    gitlink: 'https://github.com/VaibhavGupta911/portfolio-react-proj',
  }, {
    title: "Little Lemon Restaurant Figma Meta Frontend Develpoment Capstone Project ",
    description:
      "Step into creative journey of Little Lemon Restaurant! Delve into meticulously crafted wireframes, lifelike prototypes, and comprehensive user requirements Immerse yourself in visual transformation from conceptual sketches to engaging interactive interfaces.",
    getImageSrc: () => require("../images/figma1.jpg"),
    url: 'https://www.figma.com/file/b6PHQpqb0R9W7UA9eWYx86/Little-Lemon?type=design&node-id=14%3A212&mode=design&t=0SuDJiZFud89MAtt-1',
    gitlink: 'https://www.figma.com/file/b6PHQpqb0R9W7UA9eWYx86/Little-Lemon?type=design&node-id=14%3A212&mode=design&t=0SuDJiZFud89MAtt-1',
  },
  {
    title: "Little Lemon UI",
    description:
      "As a Part of Meta Frontend development Course Assignment I made Little Lemon UI UX Using Figma which includes(User persona, Wireframe,Basic Running Phototype, Journey Map)",
    getImageSrc: () => require("../images/photo2.jpg"),
    url: 'https://www.figma.com/file/LYe8AM7c9SexkBOnIWXxbC/Little-Lemon-Project?type=design&node-id=0%3A1&mode=design&t=13QPxkRHikdINFqQ-1',
    gitlink: 'https://www.figma.com/file/LYe8AM7c9SexkBOnIWXxbC/Little-Lemon-Project?type=design&node-id=0%3A1&mode=design&t=13QPxkRHikdINFqQ-1',
  },
  {
    title: "E Commerce Website",
    description:
      "E Commerce Website made using HTML CSS JavaScript as a part of Internship Training with InternsElite · Internship",
    getImageSrc: () => require("../images/photo3.jpg"),
    url: 'https://vaibhavgupta911.github.io/e-com/',
    gitlink: 'https://github.com/VaibhavGupta911/e-com',
  },
  {
    title: "ToDo List",
    description:
      "Todo List made using React Chakara UI CSS HTML JavaScript project includes List Button and Dark Mode Button",
    getImageSrc: () => require("../images/photo4.jpg"),
    url: 'https://vaibhavgupta911.github.io/todolist/',
    gitlink: 'https://github.com/VaibhavGupta911/todolist',
  },
  {
    title: "Bookshelf Explorer (Assignment of Marquee Equity)",
    description:
      "Explore and manage your book collection with ease. Search and add books to your personal shelf.Leveraging Book API React's features and Chakra UI.",
    getImageSrc: () => require("../images/photo8.JPG"),
    url: 'https://vaibhavgupta911.github.io/bookshell/',
    gitlink: 'https://github.com/VaibhavGupta911/bookshell',
  },
  {
    title: "Results Summary Component",
    description:
      "A responsive component built with React, HTML, CSS, and JavaScript for showcasing skills like verbal memory, reaction time, and visual abilities. it adapts to all screen sizes",
    getImageSrc: () => require("../images/photo7.JPG"),
    url: 'https://vaibhavgupta911.github.io/results_summary_component/',
    gitlink: 'https://github.com/VaibhavGupta911/results_summary_component',
  },

  {
    title: "Interactive Rating Component",
    description:
      "A responsive React component with useContext and useState for state management, designed for interactive user ratings and feedback. It offers customization options and adapts seamlessly to different screen sizes.",
    getImageSrc: () => require("../images/photo9.jpg"),
    url: 'https://vaibhavgupta911.github.io/interactive_rating/',
    gitlink: 'https://github.com/VaibhavGupta911/interactive_rating',
  },
  {
    title: "FAQ Accordion Card",
    description:
      "This project is responsive and interactive  FAQ accordion card built with React, HTML, CSS, and JavaScript, utilizing React's useState. The FAQ card display a list of questions and answers, allowing users to expand and collapse answers as needed.",
    getImageSrc: () => require("../images/photo10.jpg"),
    url: 'https://vaibhavgupta911.github.io/faqapp/',
    gitlink: 'https://github.com/VaibhavGupta911/faqapp',
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      
      //backgroundColor='#075E54'
      isDarkBackground
      p={8}
      // alignItems="flex-start"
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

export default ProjectsSection;*/

import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Express Travelers",
    description:
      "Landing Page of Express Travelers made using Bootstrap JavaScript HTML CSS",
    getImageSrc: () => require("../images/photo11.jpg"),
    url: 'https://vaibhavgupta911.github.io/bswebsite/',
    gitlink: 'https://github.com/VaibhavGupta911/bswebsite',
  },
  {
    title: "🍋Little Lemon Restaurant Website Meta Frontend Develpoment Capstone Project",
    description:
      "🍋Little Lemon Restaurant: React.js,Formik.Explore a responsive,interactive dining experience. Tech: React.js, CSS, HTML, JS",
    getImageSrc: () => require("../images/little lemon.jpg"),
    url: 'https://vaibhavgupta911.github.io/little-lemon-resturant/',
    gitlink: 'https://github.com/VaibhavGupta911/little-lemon-resturant',
  },
  {
    title: "Portfolio for Meta Frontend Develpoment Course Assignment",
    description:
      "Nav Bar with Social media links and quick scroll button , picture of student Featured Project , Contact Form & footer made using Chakara UI Formik forms yup React hooks etc",
    getImageSrc: () => require("../images/photo1.png"),
    url: 'https://vaibhavgupta911.github.io/portfolio-react-proj/',
    gitlink: 'https://github.com/VaibhavGupta911/portfolio-react-proj',
  },
  {
    title: "Little Lemon Restaurant Figma Meta Frontend Develpoment Capstone Project ",
    description:
      "Step into creative journey of Little Lemon Restaurant! Delve into meticulously crafted wireframes, lifelike prototypes, and comprehensive user requirements Immerse yourself in visual transformation from conceptual sketches to engaging interactive interfaces.",
    getImageSrc: () => require("../images/figma1.jpg"),
    url: 'https://www.figma.com/file/b6PHQpqb0R9W7UA9eWYx86/Little-Lemon?type=design&node-id=14%3A212&mode=design&t=0SuDJiZFud89MAtt-1',
    gitlink: 'https://www.figma.com/file/b6PHQpqb0R9W7UA9eWYx86/Little-Lemon?type=design&node-id=14%3A212&mode=design&t=0SuDJiZFud89MAtt-1',
  },
  {
    title: "Little Lemon UI",
    description:
      "As a Part of Meta Frontend development Course Assignment I made Little Lemon UI UX Using Figma which includes(User persona, Wireframe,Basic Running Phototype, Journey Map)",
    getImageSrc: () => require("../images/photo2.jpg"),
    url: 'https://www.figma.com/file/LYe8AM7c9SexkBOnIWXxbC/Little-Lemon-Project?type=design&node-id=0%3A1&mode=design&t=13QPxkRHikdINFqQ-1',
    gitlink: 'https://www.figma.com/file/LYe8AM7c9SexkBOnIWXxbC/Little-Lemon-Project?type=design&node-id=0%3A1&mode=design&t=13QPxkRHikdINFqQ-1',
  },
  {
    title: "E Commerce Website",
    description:
      "E Commerce Website made using HTML CSS JavaScript as a part of Internship Training with InternsElite · Internship",
    getImageSrc: () => require("../images/photo3.jpg"),
    url: 'https://vaibhavgupta911.github.io/e-com/',
    gitlink: 'https://github.com/VaibhavGupta911/e-com',
  },
  {
    title: "ToDo List",
    description:
      "Todo List made using React Chakara UI CSS HTML JavaScript project includes List Button and Dark Mode Button",
    getImageSrc: () => require("../images/photo4.jpg"),
    url: 'https://vaibhavgupta911.github.io/todolist/',
    gitlink: 'https://github.com/VaibhavGupta911/todolist',
  },
  {
    title: "Bookshelf Explorer (Assignment of Marquee Equity)",
    description:
      "Explore and manage your book collection with ease. Search and add books to your personal shelf.Leveraging Book API React's features and Chakra UI.",
    getImageSrc: () => require("../images/photo8.JPG"),
    url: 'https://vaibhavgupta911.github.io/bookshell/',
    gitlink: 'https://github.com/VaibhavGupta911/bookshell',
  },
  {
    title: "Results Summary Component",
    description:
      "A responsive component built with React, HTML, CSS, and JavaScript for showcasing skills like verbal memory, reaction time, and visual abilities. it adapts to all screen sizes",
    getImageSrc: () => require("../images/photo7.JPG"),
    url: 'https://vaibhavgupta911.github.io/results_summary_component/',
    gitlink: 'https://github.com/VaibhavGupta911/results_summary_component',
  },
  {
    title: "Interactive Rating Component",
    description:
      "A responsive React component with useContext and useState for state management, designed for interactive user ratings and feedback. It offers customization options and adapts seamlessly to different screen sizes.",
    getImageSrc: () => require("../images/photo9.jpg"),
    url: 'https://vaibhavgupta911.github.io/interactive_rating/',
    gitlink: 'https://github.com/VaibhavGupta911/interactive_rating',
  },
  {
    title: "FAQ Accordion Card",
    description:
      "This project is responsive and interactive  FAQ accordion card built with React, HTML, CSS, and JavaScript, utilizing React's useState. The FAQ card display a list of questions and answers, allowing users to expand and collapse answers as needed.",
    getImageSrc: () => require("../images/photo10.jpg"),
    url: 'https://vaibhavgupta911.github.io/faqapp/',
    gitlink: 'https://github.com/VaibhavGupta911/faqapp',
  },
];

const ProjectsSection = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={isLargerThan800 ? "repeat(2, 1fr)" : "1fr"}
        gridGap={8}
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