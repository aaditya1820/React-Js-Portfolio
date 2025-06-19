// Projects.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: ' React js text app',
    description: 'A cool project using React js.',
    link: 'https://github.com/aaditya1820/React-JS---Text-app'
  },
  {
    title: 'E-Commerce Chocolate Selling Website - .Net Core',
    description: 'An e-commerce website with payment integration.',
   link: 'https://github.com/aaditya1820/ChocoCrunch'
  },
  {
    title: 'Gym Management Website - PHP',
    description: 'A wonderful gym management website in php + HTML + CSS.',
    link: 'https://github.com/aaditya1820/Gymanagement'
  },
   {
    title: ' React js NewsApp ',
    description: 'A wonderful News Reading website in React js for free !!.',
    link: 'https://github.com/aaditya1820/NewsApp----React-Js'
  },
];

export default function Projects() {
  return (
    <Container className="my-5">
      <h1 className="display-4 fw-bold" align = "center">My Projects</h1><br></br>
      <Row>
        {projects.map((proj, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Img variant="top" src={proj.image} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.description}</Card.Text>
                <Button 
                  variant="primary" 
                  href={proj.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  View Code
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
