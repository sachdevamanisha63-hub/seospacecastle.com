"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Container, Row, Col, Nav, NavDropdown } from "react-bootstrap";
import {
  FaBriefcase,
  FaCode,
  FaMobileAlt,
  FaBullhorn,
  FaHome,
  FaQuestionCircle,
  FaBars,
} from "react-icons/fa";

import MobileMenu from "./Mobile-Menu";

const Header: React.FC = () => {
  const [showServices, setShowServices] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <header className="header">
        <Container className="p-0">
          <Row className="align-items-center g-0">

            {/* Logo */}
            <Col lg={2} xs={6} className="ps-4">
              <div className="logo">
                <Link href="/">
                  <img
                    src="/assets/img/logo/SSC-white-logo-1024x677.png"
                    alt="Logo"
                    height="60"
                  />
                </Link>
              </div>
            </Col>

            {/* Desktop Menu */}
            <Col lg={7} className="d-none d-lg-block">
              <Nav className="justify-content-center align-items-center">

                <Nav.Link as={Link} href="/" className="nav-item-link">
                  HOME
                </Nav.Link>

                <NavDropdown
                  title="SERVICES"
                  id="services-dropdown"
                  className="custom-dropdown nav-item-link mega-services"
                  show={showServices}
                  onMouseEnter={() => setShowServices(true)}
                  onMouseLeave={() => setShowServices(false)}
                >
                  <div className="services-mega-wrap">

                    <div className="services-col">
                      <div className="service-title">
                        <span className="drop-icon">
                          <FaCode />
                        </span>
                        <h6>Website Development</h6>
                      </div>

                      <a href="#">WordPress Development</a>
                      <a href="#">Shopify Development</a>
                      <a href="#">Laravel Development</a>
                      <a href="#">React / Next.js</a>
                      <a href="#">E-Commerce Development</a>
                      <a href="#">Maintenance Plans</a>
                    </div>

                    <div className="services-col">
                      <div className="service-title">
                        <span className="drop-icon">
                          <FaBullhorn />
                        </span>
                        <h6>Digital Marketing</h6>
                      </div>

                      <a href="#">SEO Services</a>
                      <a href="#">Content Marketing</a>
                      <a href="#">Social Media Marketing</a>
                      <a href="#">PPC Ads</a>
                      <a href="#">Affiliate Marketing</a>
                      <a href="#">Conversion Optimization</a>
                    </div>

                    <div className="services-col">
                      <div className="service-title">
                        <span className="drop-icon">
                          <FaMobileAlt />
                        </span>
                        <h6>Software & App Development</h6>
                      </div>

                      <a href="#">Custom Software</a>
                      <a href="#">SaaS Development</a>
                      <a href="#">Web App Development</a>
                      <a href="#">Mobile App Development</a>
                      <a href="#">Cloud Apps</a>
                      <a href="#">QA Testing</a>
                    </div>

                  </div>
                </NavDropdown>

                <Nav.Link as={Link} href="/blogs" className="nav-item-link">
                  BLOGS
                </Nav.Link>

                <NavDropdown
                  title="PAGES"
                  id="pages-dropdown"
                  className="custom-dropdown nav-item-link"
                  show={showPages}
                  onMouseEnter={() => setShowPages(true)}
                  onMouseLeave={() => setShowPages(false)}
                >
                  <NavDropdown.Item as={Link} href="/about">
                    <span className="drop-icon"><FaHome /></span>
                    <div>
                      <h6>About Us</h6>
                      <p>Who We Are</p>
                    </div>
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} href="/career">
                    <span className="drop-icon"><FaBriefcase /></span>
                    <div>
                      <h6>Career</h6>
                      <p>Join Our Team</p>
                    </div>
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} href="/faq">
                    <span className="drop-icon"><FaQuestionCircle /></span>
                    <div>
                      <h6>FAQs</h6>
                      <p>Get Answers</p>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} href="/contact" className="nav-item-link">
                  CONTACT
                </Nav.Link>

              </Nav>
            </Col>

            {/* Mobile Hamburger */}
            <Col
              xs={6}
              className="d-flex d-lg-none justify-content-end pe-4"
            >
              <button
                className="mobile-toggle"
                onClick={() => setShowMobileMenu(true)}
              >
                <FaBars />
              </button>
            </Col>

          </Row>
        </Container>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
      />
    </>
  );
};

export default Header;