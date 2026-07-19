import Hero from "../sections/Hero";
import About from "../sections/About";
import Journey from "../sections/Journey";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Achievements from "../sections/Achievements";
import Leadership from "../sections/Leadership";
import Resume from "../sections/Resume";
import Contact from "../sections/Contact";
import WaveDivider from "../components/ui/WaveDivider";

export default function Home() {
  return (
    <main>
      <Hero />
      <WaveDivider />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <WaveDivider />
      <Achievements />
      <Leadership />
      <Resume />
      <Contact />
    </main>
  );
}
