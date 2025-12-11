import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, handleOpenModal }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="col-md-6 col-lg-4 mb-4"
    >
      <Card className="h-100 project-card" onClick={() => handleOpenModal(project)}>
        <div className="card-img-container">
          <LazyLoadImage
            effect="blur"
            src={project.thumbnail}
            className="card-img-top"
            alt={project.title}
          />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fw-bold">{project.title}</Card.Title>
          <Card.Text className="text-muted">{project.description}</Card.Text>
          <div className="mt-auto">
            {project.tags.map((tag) => (
              <span key={tag} className="badge rounded-pill bg-secondary me-1">
                {tag}
              </span>
            ))}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

const Projects = ({ projects, activeFilter, setActiveFilter, handleOpenModal }) => {
  const filters = ['All', 'Professional Work', 'Academic Research', 'Software Development', 'Data Science', 'Personal Project'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-5 display-5">Projects</h2>
        <div className="text-center mb-5">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'primary' : 'outline-primary'}
              onClick={() => setActiveFilter(filter)}
              className="m-1 rounded-pill px-3"
            >
              {filter}
            </Button>
          ))}
        </div>
        <Row>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
