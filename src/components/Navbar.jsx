import React, { useState, useRef, useEffect } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
<<<<<<< HEAD
import ReactGA from "react-ga";
=======
>>>>>>> ef234a1e31f3a84829ec0f07518ab90a3cfc81a9
import { mainBody, repos, about, skills } from "../editable-stuff/config.js";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  useEffect(() => {
<<<<<<< HEAD
    ReactGA.pageview(window.location.pathname );
=======
>>>>>>> ef234a1e31f3a84829ec0f07518ab90a3cfc81a9
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top ${!isTop ? "navbar-white" : "navbar-transparent"
        }`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-brand" href={"/#home"}>
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
<<<<<<< HEAD
          {
  
          about.show && (
=======
          {about.show && (
>>>>>>> ef234a1e31f3a84829ec0f07518ab90a3cfc81a9
            <Nav.Item>
              <a className="nav-link lead" href={"/#aboutme"}>
                About
              </a>
            </Nav.Item>
          )}
          {skills.show && (
            <Nav.Item>
              <a className="nav-link lead" href={"/#skills"}>
                Services
              </a>
            </Nav.Item>
          )}
          {repos.show && (
            <Nav.Item>
              <a className="nav-link lead" href={"/#projects"}>
                Projects
              </a>
            </Nav.Item>
          )}
          <Nav.Item>
            <a
              className="nav-link lead"
              href={"/#contact"}
              rel="noreferrer noopener"
            >
              Contact
            </a>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
