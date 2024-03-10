import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { Jumbotron } from "./migration";

// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Skills = React.forwardRef(({ heading }, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );

  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-5">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center hao">
          {heading}
        </h2>
        <Tabs
          className="skills-tabs"
          defaultActiveKey="project-hub"
          id="skills-tabs"
          fill
        >
          <Tab tabClassName="skills-tab lead" eventKey="project-hub">
            <Row className="pt-3 px-1">
              <div className="project-hub-content">
                <p style={{ fontSize: "1.2em" }}> {/* Adjust the font size here */}
                  We are the leading professional project maker that offers
                  projects for college students. We provide working projects,
                  readymade projects, readymade dissertation and thesis for the
                  students of  MCA, BCA, B. Tech, IT and many more...
                </p>
                <ul style={{ fontSize: "1.2em" }}> {/* Adjust the font size here */}
                  <li>
                    100% tested and approved Project
                  </li>
                  <li>
                    1000+ Projects Available
                  </li>
                  <li>
                    Varied Specializations
                  </li>
                  <li>
                    Full Project = Synopsis + Report + PPT
                  </li>
                  <li>
                    Delivery to your inbox
                  </li>
                  <li>
                    Cost Effective
                  </li>
                </ul>
              </div>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Jumbotron>
  );
});

export default Skills;
