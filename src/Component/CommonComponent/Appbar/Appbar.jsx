import React, { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import {Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import navLogo from "../../../assets/Header/navLogo.webp";
import CustomButton from "../CustomButton/CustomButton";

export default function Appbar() {
  const [state, setstate] = useState({
    openHomeDropdown: false,
    openPageDropdown: false,
    openBlogDropdown: false,
  });

  const handleHover = (key) => {
    const updatedState = {
      openHomeDropdown: false,
      openPageDropdown: false,
      openBlogDropdown: false,
      [key]: true,
    };

    setstate(updatedState);
  };

  const handleMouseEnter = (key) => {
    setstate({
      [key]: true,
    });
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <Navbar collapseOnSelect expand="xl" className="py-0 position-absolute">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={navLogo}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggler"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto px-15 text-uppercase align-items-center">
            {/* Home tabisDropdownOpen */}

            <NavDropdown
              className="text-white ml-30 fs-15 fw-bold"
              title={
                <>
                  Home <ChevronDown className="icon text-white fs-14 fw-900" />
                </>
              }
              id="collapsible-nav-dropdown"
              onMouseEnter={() => handleHover("openHomeDropdown")}
              onMouseLeave={() => handleHover("")}
              show={state.openHomeDropdown}
            >
              <>
                <NavDropdown.Item className="text-white" href="#action/3.1">
                  Home 01
                </NavDropdown.Item>
                <NavDropdown.Item className="text-white" href="#action/3.1">
                  Home 02
                </NavDropdown.Item>
              </>
            </NavDropdown>
            {/*  */}
            {/* About Us tab */}
            <Nav.Link
              className="text-white ml-30 fs-15 fw-bold"
              href="#pricing"
            >
              About Us
            </Nav.Link>
            {/* {} */}
            {/* pages tab */}
            <NavDropdown
              className="text-white ml-30 fs-15 fw-bold"
              title={
                <>
                  Pages <ChevronDown className="icon text-white fs-14 fw-900" />
                </>
              }
              id="collapsible-nav-dropdown"
              onMouseEnter={() => handleHover("openPageDropdown")}
              onMouseLeave={() => handleHover("")}
              show={state.openPageDropdown}
            >
              <NavDropdown.Item className="text-white" href="#action/3.1">
                coin information
              </NavDropdown.Item>
              <NavDropdown.Item className="text-white" href="#action/3.2">
                coin stacking
              </NavDropdown.Item>
              <NavDropdown.Item className="text-white" href="#action/3.1">
                services
              </NavDropdown.Item>
              <NavDropdown.Item className="text-white" href="#action/3.2">
                token ico
              </NavDropdown.Item>
              <NavDropdown.Item className="text-white" href="#action/3.2">
                faq
              </NavDropdown.Item>
            </NavDropdown>
            {/*  */}
            {/* blog tab */}
            <NavDropdown
              className="text-white ml-30 fs-15 fw-bold"
              title={
                <>
                  blogs <ChevronDown className="icon text-white fs-14 fw-900" />
                </>
              }
              id="collapsible-nav-dropdown"
              onMouseEnter={() => handleHover("openBlogDropdown")}
              onMouseLeave={() => handleHover("")}
              show={state.openBlogDropdown}
            >
              <NavDropdown.Item className="text-white" href="#action/3.1">
                blog list
              </NavDropdown.Item>
              <NavDropdown.Item className="text-white" href="#action/3.2">
                blog grid
              </NavDropdown.Item>
              <NavDropdown.Item className="text-white" href="#action/3.1">
                services
              </NavDropdown.Item>
              <NavDropdown.Item className="text-white" href="#action/3.2">
                blog grid
              </NavDropdown.Item>
            </NavDropdown>
            {/*  */}
            <Nav.Link
              className="text-white ml-30 fs-15 fw-bold"
              href="#pricing"
            >
              contact Us
            </Nav.Link>
            <div className="py-40">
              <CustomButton
                className="pink-btn navButton transition-btn py-8 px-20"
                buttonTitle="Buy Token"
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
