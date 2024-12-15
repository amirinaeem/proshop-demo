import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import SidebarFilter from "../components/SidebarFilter";
import Project from "../components/Project";
import projects from "../projects";

function HomeScreen() {
  const [filters, setFilters] = useState({
    category: "",
    rating: "",
    date: "",
    compatibility: [],
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "compatibility") {
      setFilters((prev) => {
        const updatedCompat = checked
          ? [...prev.compatibility, value]
          : prev.compatibility.filter((item) => item !== value);
        return { ...prev, compatibility: updatedCompat };
      });
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  const filteredProjects = projects.filter((project) => {
    const matchCategory = filters.category
      ? project.category === filters.category
      : true;

    const matchRating = filters.rating
      ? project.rating >= Number(filters.rating)
      : true;

    const matchCompatibility = filters.compatibility.length
      ? filters.compatibility.every((comp) =>
          project.compatibleWith.includes(comp)
        )
      : true;

    return matchCategory && matchRating && matchCompatibility;
  });

  return (
    <Row>
      {/* Sidebar */}
      <Col md={3}>
        <SidebarFilter handleFilterChange={handleFilterChange} />
      </Col>

      {/* Project Cards */}
      <Col md={9}>
        <h1 className="mb-4">Latest Projects</h1>
        <Row>
          {filteredProjects.map((project) => (
            <Col key={project._id} sm={40} md={16} lg={14} xl={13}>
              <Project project={project} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

export default HomeScreen;
