import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { aboutMe, projects } from './data';
import media from './media';

import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Skills from './components/Skills';
import Workshop from './components/Workshop';
import Footer from './components/Footer';

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <div className="App d-flex flex-column min-vh-100">
      <NavigationBar name={aboutMe.name} email={aboutMe.email} />
      <main>
        <Hero name={aboutMe.name} about={aboutMe} image={aboutMe.image} />
        <About about={aboutMe} />
        <Skills skills={aboutMe.skills} />
        <Workshop />
        <Projects 
          projects={projects}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          handleOpenModal={handleOpenModal}
        />
      </main>
      <Footer name={aboutMe.name} />

      <ProjectModal 
        project={selectedProject}
        handleCloseModal={handleCloseModal}
        media={media}
      />
    </div>
  );
}

export default App;