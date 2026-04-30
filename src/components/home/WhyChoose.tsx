import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WhyChoose: React.FC = () => {
    return (
        <div className="why-choose-us">
            <Container>
                {/* Header Section */}
                <Row className="section-row align-items-center">
                    <Col lg={7}>
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Why Choose Us</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque">
                                Expertise for <span className="text-highlight">your digital</span> growth journey
                            </h2>
                        </div>
                    </Col>

                    <Col lg={5}>
                        <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                            <p>
                                Our dedicated team is committed to understanding your unique needs,
                                ensuring that we provide innovative strategies that drive results.
                                With a focus on quality and integrity.
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Content Section */}
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="why-choose-content">
                            <div className="why-choose-item active wow fadeInUp">
                                <h3>Data-driven Approach</h3>
                                <p>We leverage data and insights to make informed decisions that lead to more effective and efficient solutions.</p>
                            </div>

                            <div className="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                                <h3>Competitive Pricing</h3>
                                <p>We offer our top-quality services at competitive prices, providing you with great value for your investment.</p>
                            </div>

                            <div className="why-choose-item wow fadeInUp" data-wow-delay="0.5s">
                                <h3>Ethical Business Practices</h3>
                                <p>We maintain the highest level of professionalism and ethical standards professionalism in all our business dealings.</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="why-choose-image-container">
                            <div className="why-choose-image">
                                <figure className="image-anime reveal">
                                    <img src="assets/img/home/why-choose-image.jpg" alt="Expertise" />
                                </figure>
                            </div>

                            <div className="consulting-badge-wrapper">
                                <svg viewBox="0 0 100 100" className="clock-image-spinning">
                                    <defs>
                                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                    </defs>
                                    <circle cx="50" cy="50" r="48" fill="#f95c4781" />
                                    <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
                                    <line x1="30" y1="60" x2="70" y2="40" stroke="white" strokeWidth="1" />
                                    <text fill="white" fontSize="6.5" fontWeight="bold">
                                        <textPath xlinkHref="#circlePath">
                                            FREE CONSULTATION • FREE CONSULTATION •
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WhyChoose;