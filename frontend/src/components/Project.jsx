import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Project = ({ project }) => {
  return (
    <Card className="my-3 p-3 rounded project-card">
      <Row className="align-items-center">
        {/* First Column - Image */}
        <Col md={4} className="project-image-section">
          <Link to={`/project/${project._id}`}>
            <Card.Img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
          </Link>
        </Col>

        {/* Second Column - Description */}
        <Col md={5} className="project-description-section">
          <Link to={`/project/${project._id}`} className="project-title-link">
            <Card.Title as="h4" className="project-title mb-2">
              {project.name}
            </Card.Title>
          </Link>
          <Card.Text className="project-description">
            {project.description ||
              "Short description of the project goes here."}
          </Card.Text>
        </Col>

        {/* Third Column - Rating, Price, and Button */}
        <Col md={3} className="project-details-section text-center">
          <Rating
            value={project.rating}
            text={`${project.numReviews} reviews`}
            className="mb-2"
          />
          <h3 className="project-price">${project.price}</h3>
          <Button variant="primary" className="live-preview-btn mt-2">
            Live Preview
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default Project;
