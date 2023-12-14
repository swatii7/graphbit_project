import React, { useState, useEffect } from "react";
import { ChevronDown, Plus } from "react-bootstrap-icons";
import {Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import navLogo from "../../../assets/Header/navLogo.webp";
import CustomButton from "../CustomButton/CustomButton";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Appbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [state, setstate] = useState({
    openHomeDropdown: false,
    openPageDropdown: false,
    openBlogDropdown: false,
  });

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Check if the user has scrolled
      const scrolled = window.scrollY > 0;

      // Update state based on the scroll position
      setIsScrolled(scrolled);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


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

  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <Navbar bg={isScrolled? 'stick': ''}  collapseOnSelect expand="xl" className="appbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={navLogo}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        
        <div className="py-40 ml-60 tokenButton">
              <CustomButton
                className="pink-btn navButton transition-btn py-8 px-20"
                buttonTitle="Buy Token"
              />
            </div>
       
            <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="toggler"
        onClick={handleNavbarToggle}
      >
        {isNavbarOpen ? <FaTimes /> : <FaBars />}
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="largeScreenNavbar px-15 text-uppercase align-items-center">
            {/* Home tabisDropdownOpen */}

            <NavDropdown
              className="text-white ml-30 fs-15 fw-bold"
              title={
                <>
                  Home  <ChevronDown className="drop-icon chevronIcon text-white fs-14 fw-900" /> 
                   
                </>
              }
              id="collapsible-nav-dropdown"
              onMouseEnter={() => handleHover("openHomeDropdown")}
              onMouseLeave={() => handleHover("")}
              show={state.openHomeDropdown}
            >
              <>
                <NavDropdown.Item className="text-white" href="/">
                  Home 01
                </NavDropdown.Item>
                <NavDropdown.Item className="text-white" href="/home2">
                  Home 02
                </NavDropdown.Item>
              </>
            </NavDropdown>
            {/*  */}
            {/* About Us tab */}
            <Nav.Link
              className="text-white ml-30 fs-15 fw-bold"
              href="/aboutus"
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
              <NavDropdown.Item className="text-white" href="/coinInformation">
                coin information
              </NavDropdown.Item>
              <NavDropdown.Item className="text-white" href="/coinStacking">
                coin stacking
              </NavDropdown.Item>
              <NavDropdown.Item className="text-white" href="/services">
                services
              </NavDropdown.Item>
              <NavDropdown.Item className="text-white" href="/tokenIco">
                token ico
              </NavDropdown.Item>
              <NavDropdown.Item className="text-white" href="/faqs">
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
              <NavDropdown.Item className="text-white" href="/blogList">
                blog list
              </NavDropdown.Item>
              <NavDropdown.Item className="text-white" href="/blogGrid">
                blog grid
              </NavDropdown.Item>
              <NavDropdown.Item className="text-white" href="/blogDetail">
                blog details
              </NavDropdown.Item>
            </NavDropdown>
            {/*  */}
            <Nav.Link
              className="text-white ml-30 fs-15 fw-bold"
              href="/contactUs"
            >
              contact Us
            </Nav.Link>
            <div className="py-40 ml-60 d-md-none d-lg-flex">
              <a href="/contactUs">
              <CustomButton
                className="pink-btn navButton token-btn transition-btn py-8 px-20"
                buttonTitle="Buy Token"
              />
              </a>
             
            </div>
          </Nav>

          <nav className="mean-nav">
      <ul className="list-none">
        <li className="position-relative">
          <a
            title="Home"
            className="text-white text-decoration-none"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Home
          </a>
          <ul className="submenu" style={{ display: 'none' }}>
            <li className="">
              <a title="Home 01"
              className="text-white text-decoration-none"
               href="/">
                Home 01
              </a>
            </li>
            <li className="">
              <a title="Home 02"
               className="text-white text-decoration-none"
               href="/home2">
                Home 02
              </a>
            </li>
          </ul>
          <a className="mean-expand text-white text-decoration-none"  href="#" style={{ fontSize: '18px' }}>
            +
          </a>
        </li>
        <li className="">
          <a title="About Us" className="text-white text-decoration-none" href="/aboutus">
            About Us
          </a>
        </li>
        <li className="position-relative">
          <a
            title="Pages"
            className="text-white text-decoration-none"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Pages
          </a>
          <ul className="submenu" style={{ display: 'none' }}>
            <li className="">
              <a title="Coin Information" className="text-white text-decoration-none" href="/coinInformation">
                Coin Information
              </a>
            </li>
            <li className="">
              <a title="Coin Stacking" className="text-white text-decoration-none" href="/coinStacking">
                Coin Stacking
              </a>
            </li>
            <li className="">
              <a title="Services" className="text-white text-decoration-none" href="/services">
                Services
              </a>
            </li>
            <li className="">
              <a title="Token Ico" className="text-white text-decoration-none" href="/tokenIco">
                Token Ico
              </a>
            </li>
            <li className="">
              <a title="FAQ" className="text-white text-decoration-none" href="/faqs">
                FAQ
              </a>
            </li>
          </ul>
          <a className="mean-expand text-white text-decoration-none" href="#" style={{ fontSize: '18px' }}>
            +
          </a>
        </li>
        <li  className="position-relative">
          <a
            title="Blog"
            className="text-white text-decoration-none"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Blog
          </a>
          <ul className="submenu" style={{ display: 'none' }}>
            <li className="">
              <a title="Blog List" className="text-white text-decoration-none" href="/blogList">
                Blog List
              </a>
            </li>
            <li className="">
              <a title="Blog Grid" className="text-white text-decoration-none" href="/blogGrid">
                Blog Grid
              </a>
            </li>
            <li className="">
              <a title="Blog Details" className="text-white text-decoration-none" href="/blogDetail">
                Blog Details
              </a>
            </li>
          </ul>
          <a className="mean-expand text-white text-decoration-none" href="#" style={{ fontSize: '18px' }}>
            +
          </a>
        </li>
        <li className="">
          <a title="Contact Us" className="text-white text-decoration-none" href="/contactUs">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
        </Navbar.Collapse>

    
       
       
      </Container>
    </Navbar>
  );
}
