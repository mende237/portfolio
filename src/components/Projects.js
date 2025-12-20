import React from 'react';
import { Container, Row, Button, Card } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project, handleOpenModal }) => {
  const { i18n } = useTranslation();
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
      <Card className="h-100 project-card shadow-sm" onClick={() => handleOpenModal(project)}>
        <div className="card-img-container overflow-hidden">
          <LazyLoadImage
            effect="blur"
            src={project.thumbnail}
            className="card-img-top"
            alt={project.title}
          />
        </div>
        <Card.Body className="d-flex flex-column p-4">
          <Card.Title className="fw-bold h5">{project.title}</Card.Title>
          <Card.Text className="text-muted small">{project.description[i18n.language]}</Card.Text>
          <div className="mt-auto">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="badge rounded-pill bg-primary me-1 mb-1">
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
  const { t } = useTranslation();
  const filters = ['All', 'Professional Work', 'Academic Research', 'Data Science', 'Personal Project', 'Code Competition'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => Array.isArray(p.category) ? p.category.includes(activeFilter) : p.category === activeFilter);

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold">{t('projects.title')}</h2>
        <div className="text-center mb-5">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'primary' : 'outline-secondary'}
              onClick={() => setActiveFilter(filter)}
              className="m-1 rounded-pill px-4 py-2"
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
