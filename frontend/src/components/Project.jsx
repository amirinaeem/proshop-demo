import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Project = ({ project }) => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/AppData");
        console.log("API Response:", response.data); // Log actual data
        setApps(response.data); // Use response.data
      } catch (err) {
        console.error(
          "Error fetching data:",
          err.response?.status || err.message
        );
      }
    };

    getData();
  }, []);

  // Validate `project` before rendering
  if (!project) {
    return <p>Loading project data...</p>;
  }

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
            value={project.rating || 0}
            text={`${project.numReviews || 0} reviews`}
            className="mb-2"
          />
          <h3 className="project-price">${project.price || "0.00"}</h3>
          <Button variant="primary" className="live-preview-btn mt-2">
            Live Preview
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default Project;
