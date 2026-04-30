import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRight, ArrowUpRight } from "react-bootstrap-icons";
import { EmojiSmile } from "react-bootstrap-icons";

const HeroHome: React.FC = () => {
    return (
        <section className="hero-wrapper">
            <div className="main-card-bg">
                <Container>
                    <Row className="banner-top-row">
                        <Col xs={12} className="text-right">
                            <div className="get-started-box text-white ">
                             Let’s Connect <span className="get-started-arrow wave-hand" style={{ fontSize: "22px" }}>👋</span>
                            </div>
                            <p className="welcome-text mt-40 text-white">WELCOME</p>
                            <p className="description-text text-white">
                                Beautiful design has the power to captivate audiences.
                            </p>
                        </Col>
                    </Row>

                    <Row className="hero-main-typography-row">
                        <Col xs={12} className="position-relative">
                            <h1 className="hero-title display-1">
                                <span className="d-block text-uppercase fw-bold mb-n3">UNLOCK</span>
                                <span className="d-block text-uppercase outline-text">DIGITAL</span>
                                <span className="d-block text-uppercase fw-bold text-end agency-text">SUCCESS</span>
                            </h1>

                            <div className="avatar-section">
                                <ArrowUpRight className="arrow-icon" />
                                <div className="team-avatars">
                                    <img src="/assets/img/home/user1.jpg" alt="team" className="avatar" />
                                    <img src="/assets/img/home/user2.jpg" alt="team" className="avatar ms-n2" />
                                    <img src="/assets/img/home/user3.jpg" alt="team" className="avatar ms-n2" />
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <div className="hero-bottom-container">
                        <div className="learn-more-badge">
                            <div className="rotating-wrapper">
                                <svg
                                    viewBox="0 0 100 100"
                                    className="clock-image-spinning"
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <defs>
                                        <path
                                            id="circlePath"
                                            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                        />
                                    </defs>
                                    <circle cx="50" cy="50" r="48" fill="010101" />
                                    <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
                                    <line x1="30" y1="60" x2="70" y2="40" stroke="white" strokeWidth="1" />
                                    <text fill="white" fontSize="8" fontWeight="bold" letterSpacing="1">
                                        <textPath xlinkHref="#circlePath" startOffset="0%">
                                            FREE CONSULTATION • FREE CONSULTATION •
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>
                        <div className="hero-portfolio-img">
                            <img src="/assets/img/home/banner11.jfif" alt="Work" />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default HeroHome;