import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";
import ProjectShowcase from "./components/ProjectShowcase";
export default function Home() {
  return (
    <ChakraProvider>
      <NavBar />
      <Profile />
      <About />
      <Skills />
      <Education />
      <ProjectShowcase />
      <Footer />
    </ChakraProvider>
  );
}
