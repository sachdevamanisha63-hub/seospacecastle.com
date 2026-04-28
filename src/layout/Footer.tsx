import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="footer-container mt-100">
            <div className="footer-hero-background-svg" />

            <div className="footer-hero-section">
                <span className="contact-us-label">CONTACT US</span>
                <div className="hero-title-group">
                    <h1 className="hero-title-filled">LET'S GET</h1>
                    <h1 className="hero-title-outlined">STARTED</h1>
                </div>
                <button className="get-in-touch-button">
                    GET IN TOUCH <span className="arrow">→</span>
                </button>
            </div>

            <Container className="footer-sitemap-wrapper">
                <Row className="justify-content-between">
                    <Col xxl={4} xl={4} lg={12} className="mb-5 mb-xl-0 sitemap-logo-column">
                        <div className="footer-logo mb-4">
                            <img
                                src="/assets/img/logo/SSC-white-logo-1024x677.png"
                                alt="Logo"
                                className="img-fluid"
                                style={{ maxWidth: '180px' }}
                            />
                        </div>

                        <div className="office-details mb-5 mt-50">
                            <div className="detail-item d-flex align-items-center mb-3">
                                <FaMapMarkerAlt className="me-3 text-primary" />
                                <span>BLOCK-F, SEO Space Castle, India</span>
                            </div>
                            <div className="detail-item d-flex align-items-center mb-3">
                                <FaEnvelope className="me-3 text-primary" />
                                <a href="mailto:info@seospacecastle.com" className="text-white text-decoration-none">info@seospacecastle.com</a>
                            </div>
                            <div className="detail-item d-flex align-items-center">
                                <FaPhoneAlt className="me-3 text-primary" />
                                <span>+1 234 567 890</span>
                            </div>
                        </div>

                        <div className="social-section-wrap mt-90">
                            <h4 className="social-label">CONNECT WITH US</h4>
                            <div className="social-icons-row">
                                <a href="#" className="social-icon-item fb"><FaFacebookF /></a>
                                <a href="#" className="social-icon-item ig"><FaInstagram /></a>
                                <a href="#" className="social-icon-item tw"><FaTwitter /></a>
                                <a href="#" className="social-icon-item li"><FaLinkedinIn /></a>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={8} xl={8} lg={12}>

                        <Row className="mb-4">
                            <Col md={4} xs={6} className="sitemap-column">
                                <h4>SERVICES</h4>
                                <ul>
                                    <li><a href="/">Digital Marketing</a></li>
                                    <li><a href="/">Website Development</a></li>
                                    <li><a href="/">Mobile App Development</a></li>
                                    <li><a href="/">Seo</a></li>
                                </ul>
                            </Col>
                            <Col md={4} xs={6} className="sitemap-column">
                                <h4>QUICK LINKS</h4>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Blogs</a></li>
                                    <li><a href="/">FAQ's</a></li>
                                    <li><a href="/">Contact Us</a></li>
                                </ul>
                            </Col>
                            <Col md={4} xs={12} className="sitemap-column">
                                <h4>PAGES</h4>
                                <ul>
                                    <li><a href="/">Terms And Conditions</a></li>
                                    <li><a href="/">Privacy Policy</a></li>
                                    <li><a href="/">Carrer</a></li>
                                    <li><a href="/">About</a></li>
                                </ul>
                            </Col>
                        </Row>

                        {/* Map Row: Spans the full width of the right 7-column area */}
                        <Row>
                            <Col xs={12}>
                                <div className="footer-map-container">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14000!2d75!3d30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1714123456789"
                                        width="100%"
                                        height="200"
                                        style={{ border: 0, borderRadius: '15px' }}
                                        title="map"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="footer-bottom-bar gy-3 align-items-center">
                    <Col xl={6} md={12} className="text-center text-xl-start">
                        © 2024 AGENCA. All Rights Reserved.
                    </Col>
                    <Col xl={6} md={12} className="d-flex justify-content-center justify-content-xl-end gap-4">
                        <span>Powered By Webflow</span>
                        <span>Built By Rick Mummery</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;