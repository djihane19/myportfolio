
import Hero from './Hero.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Experience from './Experience.jsx';
import Certifications from './Certifications.jsx';
import Contact from './Contact.jsx';

const Home = () => {
  return (
    <div className="home-container">
      <Hero id="hero" />
      <About id="apropos" />
      <Skills id="competences" />
      <Projects id="projets" />
      <Experience id="experience" />
      <Certifications id="certifications" />
      <Contact id="contact" />
    </div>
  );
};

export default Home;