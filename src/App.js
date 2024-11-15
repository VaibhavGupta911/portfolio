import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ScrollUpButton from "./components/ScrollUpButton"; // Import the ScrollUpButton
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
      <ScrollUpButton /> {/* Add the ScrollUpButton here */}
    </ChakraProvider>
  );
}