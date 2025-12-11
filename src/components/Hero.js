import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';

const Hero = ({ name, profile, image }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <header id="home" className="hero-section text-white text-center">
      <Container>
        <motion.div
          className="row align-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Col md={4} className="text-center mb-4 mb-md-0">
            <motion.div variants={itemVariants}>
              <LazyLoadImage
                src={image}
                effect="blur"
                className="hero-image"
                alt={name}
                wrapperClassName="d-inline-block"
              />
            </motion.div>
          </Col>
          <Col md={8} className="text-md-start">
            <motion.h1 variants={itemVariants} className="display-4 fw-bold">
              I'm {name}
            </motion.h1>
            <motion.p variants={itemVariants} className="lead">
              {profile}
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button variant="outline-light" size="lg" href="#projects">
                View My Work
              </Button>
            </motion.div>
          </Col>
        </motion.div>
      </Container>
    </header>
  );
};

export default Hero;
