import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import './App.css';


export default function App() {
  return (
    <ChakraProvider>
      <header>
        <Header />
      </header>
      <main>
        <LandingSection />
        <ProjectsSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </ChakraProvider>
  );
}