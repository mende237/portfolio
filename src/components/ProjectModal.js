import React from 'react';
import { Modal, Row, Col, Badge, Button } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ReactMarkdown from 'react-markdown';

const ProjectModal = ({ project, handleCloseModal, media }) => {
  if (!project) return null;

  const renderMedia = (mediaItem) => {
    const assetSrc = media[mediaItem.src];
    if (!assetSrc) {
      console.warn(`Media source not found: ${mediaItem.src}`);
      return null;
    }
    if (mediaItem.type === 'video') {
      return <video src={assetSrc} controls className="img-fluid rounded mb-3 shadow-sm" />;
    }
    return <LazyLoadImage effect="blur" src={assetSrc} className="img-fluid rounded mb-3 shadow-sm" alt={mediaItem.src} />;
  };

  return (
    <Modal show={true} onHide={handleCloseModal} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold text-primary">{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={8}>
            <ReactMarkdown>{project.fullDescription}</ReactMarkdown>
            
            <div className="my-4">
                {project.tags.map(tag => <Badge pill bg="primary" className="me-2 p-2 px-3" key={tag}>{tag}</Badge>)}
            </div>

            {project.url && (
              <Button variant="outline-primary" href={project.url} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt me-2"></i>View Project
              </Button>
            )}
          </Col>
          <Col md={4}>
            <h4 className="mb-3">Media Gallery</h4>
            <div className="media-gallery" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
              {project.media.map((mediaItem, index) => (
                <div key={index} className="mb-3">
                  {renderMedia(mediaItem)}
                </div>
              ))}
            </div>
          </Col>
        </Row>
        
        {project.citation && (
          <div className="mt-4 p-3 bg-light rounded border">
            <h5 className="fw-semibold">Citation</h5>
            <blockquote className="mb-0 fst-italic">
              {project.citation.text}
              {project.citation.url && <a href={project.citation.url} target="_blank" rel="noopener noreferrer" className="ms-2">[DOI Link]</a>}
            </blockquote>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
