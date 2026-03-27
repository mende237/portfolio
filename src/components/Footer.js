import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = ({ name }) => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <Container>
        <Row>
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <a href="https://github.com/mende237" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/dimitri-tchaheu-tchaheu-11a57224a/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <FaLinkedin size={30} />
            </a>
            {/* <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaTwitter size={30} />
            </a> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
