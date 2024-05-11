import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";

import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
// import Bar from "./components/Bar";
import './App.css';

export default function App() {
  return (
    <>
      {/* <Bar /> */}
      <ChakraProvider>
        <main>
          <Header />
       
            <LandingSection />
            <ProjectsSection />
            <Footer />
       
        </main>
      </ChakraProvider>
    </>
  );
}
