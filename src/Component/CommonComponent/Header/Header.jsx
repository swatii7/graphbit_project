import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import navLogo from "../../../assets/Header/navLogo.webp";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import headerImage from '../../../assets/Header/headerImg.webp'
import { NavLink } from "react-bootstrap";
import { ChevronDown } from "react-bootstrap-icons";

export default function Header() {

  const [state, setstate] =useState(
    {openHomeDropdown:false,
      openPageDropdown:false,
      openBlogDropdown:false
    }
  )
 
  const handleHover = (key) => {
    const updatedState = {
      openHomeDropdown: false,
      openPageDropdown: false,
      openBlogDropdown: false,
      [key]: true,
    };

    setstate(updatedState);
    console.log(updatedState,'key')
  };

  const handleMouseEnter = (key) => {
    setstate({
      [key]:true
    })
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="appbar stick">
     <Navbar collapseOnSelect expand="xl" className="py-30">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={navLogo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggler" />
          <Navbar.Collapse id="responsive-navbar-nav">
        
            <Nav className="me-auto px-15 py-30 text-uppercase">
              {/* Home tabisDropdownOpen */}
             
            <NavDropdown
              className="text-white ml-30 fs-15 fw-bold"
              title={
                <>
                  Home <ChevronDown className="icon text-white fs-14 fw-900" />
                </>
              }
              id="collapsible-nav-dropdown"
              onMouseEnter={() => handleHover('openHomeDropdown')}
               onMouseLeave={() => handleHover('')}
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
              <Nav.Link className="text-white ml-30 fs-15 fw-bold" href="#pricing">
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
              onMouseEnter={() => handleHover('openPageDropdown')}
              onMouseLeave={() => handleHover('')}
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
              onMouseEnter={() => handleHover('openBlogDropdown')}
              onMouseLeave={() => handleHover('')}
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
              <Nav.Link className="text-white ml-30 fs-15 fw-bold" href="#pricing">
                contact Us
              </Nav.Link>
              <div className="buttonWrapper">
                <Button className="border-pink navButton fs-18 fw-bold">
                  Buy Token
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className='px-15 mt-100'>
      <Row className="d-flex">
        <Col sm={12} md={6} lg={6}>
        <div className='mt-20'>
<div>
  <h1 className='font-josefin fs-68 fw-700 lh-76'>The blockchain 
  <br />
    <span className='text-pink fw-800 lh-76'>technology </span>
    for a brighter tomorrow 
  </h1>
</div>
        </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
        <img src={headerImage} style={{maxWidth:'540px'}} />
        </Col>
      </Row>
      </Container>
    </header>
  );
}




