import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"; // Import Link if you're using React Router

import projectsData from "./servies"; // Adjust the path based on your project structure

const Project = ({ heading, length, specfic }) => {
  const dummyProjectsArr = new Array(length + specfic.length).fill({
    name: null,
    description: null,
    svn_url: null,
    stargazers_count: null,
    languages_url: null,
    pushed_at: null,
  });

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={`project-card-${index}`}
              id={`project-card-${index}`}
              value={project}
            />
          ))}
        </Row>
        <div className="text-center mt-5">
          <a href="#contact" className="btn btn-primary">More Projects</a>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Project;
