import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";

const DropdownMenu = ({ onFilterChange }) => {
  const handleChange = (selectedValue) => {
    onFilterChange(selectedValue);
  };

  return (
    <Dropdown onSelect={handleChange}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        All
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="all">All</Dropdown.Item>
        <Dropdown.Item eventKey="active">In Progress</Dropdown.Item>
        <Dropdown.Item eventKey="completed">Already Done</Dropdown.Item>
        {/* <Dropdown.Item eventKey="alphabetically">Alphabetically</Dropdown.Item>
        <Dropdown.Item eventKey="numerically">Numerically</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMenu;
