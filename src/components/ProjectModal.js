import React from 'react';
import { Modal, Row, Col, Badge } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
    <Modal show={true} onHide={handleCloseModal} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-muted fst-italic">{project.fullDescription}</p>
        
        <div className="my-3">
            {project.tags.map(tag => <Badge pill bg="primary" className="me-2 p-2" key={tag}>{tag}</Badge>)}
        </div>

        {project.url && <p><a href={project.url} target="_blank" rel="noopener noreferrer">Project Link</a></p>}
        
        <hr />
        <h4 className="mb-3">Media Gallery</h4>
        <Row>
          {project.media.map((mediaItem, index) => (
            <Col md={6} key={index}>
              {renderMedia(mediaItem)}
            </Col>
          ))}
        </Row>
        {project.citation && (
          <div className="mt-4 p-3 bg-light rounded">
            <h5 className="fw-semibold">Citation</h5>
            <p className="mb-0 fst-italic">
              {project.citation.text}
              {project.citation.url && <a href={project.citation.url} target="_blank" rel="noopener noreferrer" className="ms-2">[DOI Link]</a>}
            </p>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
