import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaReact, FaJsSquare, FaJava, FaLeaf, FaPhp, FaChartBar, FaBrain, FaGitAlt, FaSitemap, FaCode } from 'react-icons/fa';

const iconMap = {
  FaReact,
  FaJsSquare,
  FaJava,
  FaLeaf,
  FaPhp,
  FaChartBar,
  FaBrain,
  FaGitAlt,
  FaSitemap,
  FaCode,
};

const Skills = ({ skills }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      id="skills"
      className="py-5"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Container>
        <h2 className="text-center mb-5 display-5">Skills</h2>
        <Row>
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon];
            return (
              <Col md={6} key={index}>
                <motion.div className="mb-4" variants={itemVariants}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="fw-bold mb-0">
                      {IconComponent && <IconComponent className="me-2 skill-icon" />}
                      {skill.name}
                    </h5>
                    <span className="fw-bold">{skill.competence}%</span>
                  </div>
                  <div className="progress-bar-container mt-2">
                    <motion.div
                      className="progress-bar-filler"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.competence}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </motion.section>
  );
};

export default Skills;
