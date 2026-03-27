import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiMail, FiPhone } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const About = ({ about }) => {
  const { t, i18n } = useTranslation();
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      id="about"
      className="py-5 bg-light"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Container>
        <h2 className="text-center mb-5 display-5">{t('aboutMe.title')}</h2>
        <Row className="mb-5">
          <Col>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="mb-3 text-center">Profile</h3>
              <p className="text-muted text-center lead">{about.profile[i18n.language]}</p>
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="mb-3">Key Skills</h3>
              <div>
                {about.skills.map((skill, index) => (
                  <span key={index} className="badge bg-primary me-2 mb-2 p-2">
                    {skill.name}
                  </span>
                ))}
              </div>
              <h3 className="mt-4 mb-3">Contact</h3>
              <p className="text-muted">
                <FiMail className="me-2" /> {about.email}
                <br />
                <FiPhone className="me-2" /> {about.phone}
              </p>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="mb-3">Professional Experience</h3>
              {about.experiences.map((exp, index) => (
                <div key={index} className="mb-4">
                  <h5 className="fw-bold">{exp.role}</h5>
                  <p className="mb-1">
                    <span className="fw-semibold">{exp.company}</span> | {exp.location}
                  </p>
                  <p className="text-muted fst-italic">{exp.period}</p>
                </div>
              ))}
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="mb-3">Education</h3>
              {about.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h5 className="fw-bold">{edu.degree}</h5>
                  <p className="mb-1">
                    <span className="fw-semibold">{edu.institution}</span>
                  </p>
                  <p className="text-muted fst-italic">{edu.period}</p>
                </div>
              ))}
            </motion.div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6}>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="mb-3">Research Interest</h3>
              <p className="text-muted">{about.researchInterest[i18n.language]}</p>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="mb-3">Publications</h3>
              {about.publications.map((pub, index) => (
                <div key={index} className="mb-3">
                  <h5 className="fw-bold">{pub.title}</h5>
                  <p className="mb-1">{pub.authors}</p>
                  <p className="text-muted fst-italic">
                    {pub.journal && <span>{pub.journal}, </span>}
                    {pub.event && <span>{pub.event}, </span>}
                    {pub.year}
                  </p>
                  {pub.url && (
                    <a href={pub.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
                      View Publication
                    </a>
                  )}
                </div>
              ))}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default About;