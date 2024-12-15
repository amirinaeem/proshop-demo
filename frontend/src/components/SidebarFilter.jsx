import React from "react";
import { Form, ListGroup } from "react-bootstrap";

const SidebarFilter = ({ handleFilterChange }) => {
  return (
    <div className="sidebar p-3 border rounded">
      <h5 className="mb-3">Filters</h5>

      {/* All Categories */}
      <div className="mb-4">
        <h6>All Categories</h6>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Form.Check
              type="radio"
              name="category"
              label="E-commerce App"
              value="ecomm"
              onChange={handleFilterChange}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              type="radio"
              name="category"
              label="Restaurant App"
              value="restaurant"
              onChange={handleFilterChange}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              type="radio"
              name="category"
              label="Social App"
              value="social"
              onChange={handleFilterChange}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              type="radio"
              name="category"
              label="Online Marketing"
              value="marketing"
              onChange={handleFilterChange}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              type="radio"
              name="category"
              label="Gaming Apps"
              value="gaming"
              onChange={handleFilterChange}
            />
          </ListGroup.Item>
        </ListGroup>
      </div>

      {/* Filter by Rating */}
      <div className="mb-4">
        <h6>Filter by Rating</h6>
        <Form.Select name="rating" onChange={handleFilterChange}>
          <option value="">Show All</option>
          <option value="1">1 Star and Higher</option>
          <option value="2">2 Stars and Higher</option>
          <option value="3">3 Stars and Higher</option>
          <option value="4">4 Stars and Higher</option>
        </Form.Select>
      </div>

      {/* Filter by Date Added */}
      <div className="mb-4">
        <h6>Filter by Date Added</h6>
        <Form.Select name="date" onChange={handleFilterChange}>
          <option value="">Any Date</option>
          <option value="month">In the Last Month</option>
          <option value="week">In the Last Week</option>
          <option value="day">In the Last Day</option>
          <option value="hour">In the Last Hour</option>
        </Form.Select>
      </div>

      {/* Filter by Compatibility */}
      <div>
        <h6>Filter by Compatible With</h6>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Form.Check
              type="checkbox"
              label="Bootstrap"
              value="Bootstrap"
              name="compatibility"
              onChange={handleFilterChange}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              type="checkbox"
              label="ReactJS"
              value="ReactJS"
              name="compatibility"
              onChange={handleFilterChange}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              type="checkbox"
              label="TypeScript"
              value="TypeScript"
              name="compatibility"
              onChange={handleFilterChange}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Form.Check
              type="checkbox"
              label="Angular"
              value="Angular"
              name="compatibility"
              onChange={handleFilterChange}
            />
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default SidebarFilter;
