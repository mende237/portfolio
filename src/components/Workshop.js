import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import media from '../media';
import { useTranslation } from 'react-i18next';

const workshopInfo = {
  title: "DASSA’2025 Workshop",
  date: "27-28 May 2025",
  location: "Yaoundé, Cameroon",
  description: "The DASSA’2025 workshop (Digital Avenues for Low-Resource Languages of Sub-Saharan Africa) was held on 27–28 May 2025 in Yaoundé, Cameroon. The event focused on exploring the contributions of artificial intelligence to the processing of low-resource African languages. Organized by the AI4AfricanLanguages initiative, the workshop brought together researchers, practitioners, and students to discuss issues related to the collection, processing, and valorization of African linguistic data in a context of limited available resources.",
  presentation: {
    title: "A Triphone Hidden Markov Model for Forced Alignment of Nda’ Nda’ Speech",
    abstract: "Forced alignment is a technique for automatically synchronizing text and an audio recording. In this work, the aim was to propose a model to improve automatic forced alignment of speech in poorly endowed languages, in particular for the Nda' Nda' language, spoken in the West Cameroon region, while taking into account the tonal aspect. To achieve this goal, a triphone Hidden Markov Model (HMM) model was developed, trained with Mel-Frequency Cepstral Coefficients (MFCC) and pitch features, to which delta and delta-delta derivatives were added. A phonetic decision tree was used when training the triphone model, particularly during state fusion, with two groups of questions concerning phonemes with the same tones, tones with the same base vowels, and sound categories that describe the articulatory and acoustic characteristics of the phonemes; nasals and fricatives were taken into account. For the experiments, four models were trained: HMM monophone, HMM triphone, HMM triphone + Speaker Adaptive Training (SAT), and a hybrid HMM - Deep Neural Network (DNN) model. The best model was the HMM triphone, with a Word Error Rate (WER) of 8.92% and a median Phone Boundary Error (PBE) of 75.5 millisecond (ms)."
  },
  images: [
    'moi repondant aux question dassa.JPG',
    'moi presentant dassa1.JPG',
    'moi presentant dassa.JPG',
  ],
  url: "https://www.umr-tetis.fr/index.php/fr/actualites/workshop-dassa2025"
};

const Workshop = () => {
  const { t } = useTranslation();
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
      id="workshop"
      className="py-5 bg-light"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Container>
        <h2 className="text-center mb-5 display-5">{t('workshop.title')}</h2>
        <Row className="align-items-center">
          <Col md={8}>
            <p className="lead">{workshopInfo.description}</p>
            <p>During the event, I presented our work entitled <strong>“{workshopInfo.presentation.title}”</strong>, contributing to the scientific discussions on computational approaches for low-resource African languages.</p>
            <a href={workshopInfo.url} target="_blank" rel="noopener noreferrer">More information about the workshop</a>
          </Col>
          <Col md={4}>
            <Row>
              {workshopInfo.images.map((image, index) => (
                <Col key={index} xs={12} className="mb-3">
                  <LazyLoadImage
                    src={media[image]}
                    effect="blur"
                    className="img-fluid rounded"
                    alt={`Workshop image ${index + 1}`}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>{workshopInfo.presentation.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Abstract</Card.Subtitle>
                <Card.Text>
                  {workshopInfo.presentation.abstract}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default Workshop;
