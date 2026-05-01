import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import {
    GlobeCentralSouthAsia,
    Phone,
    Search,
    Bullseye
} from 'react-bootstrap-icons';

const services = [
    {
        id: 1,
        title: "Digital Marketing",
        desc: "Maximize your reach with complete campaign overview, ROI tracking, and growth analytics integrated into one dashboard.",
        icon: <Bullseye size={18} color="#ef5149" />,
        side: "left"
    },
    {
        id: 2,
        title: "Website Development",
        desc: "Custom high-performance websites designed with comprehensive reporting and analytics to track every visitor.",
        icon: <GlobeCentralSouthAsia size={18} color="#c19c32" />,
        side: "right"
    },
    {
        id: 3,
        title: "Mobile App Development",
        desc: "Full-scale mobile application design and functionality, ensuring your primary dashboard works perfectly on every device.",
        icon: <Phone size={18} color="#ef5149" />,
        side: "left"
    },
    {
        id: 4,
        title: "SEO & PPC Strategy",
        desc: "Gain a competitive edge with deep SEO audits and PPC performance insights to lower costs and increase conversions.",
        icon: <Search size={18} color="#aaadb2" />,
        side: "right"
    }
];

const FeatureCard = ({ data, visible, delay }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: data.side === 'left' ? -30 : 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay, duration: 0.8, ease: "easeOut" }}
            className="service-card mb-20 mt-20"
        >
            <div className="icon-box-wrapper">
                <div className="icon-box">{data.icon}</div>
            </div>
            <div className="card-text">
                <h3>{data.title}</h3>
                <p>{data.desc}</p>
            </div>
            <div className="card-shine" />
        </motion.div>
    );
};

const ServiceSection = () => {
    const containerRef = useRef(null);
    const [showCards, setShowCards] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    useEffect(() => {
        const timer = setTimeout(() => setShowCards(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });
    const rotateY = useTransform(smoothProgress, [0, 1], [-30, 30]);
    const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [5, 0, 5]);

    return (
        <section ref={containerRef} className="services-section-wrapper">
            <div className="cosmic-bg">
                <div className="glow-sphere gold-glow"></div>
                <div className="glow-sphere red-glow"></div>
            </div>


            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col lg={4} md={12} className="features-column left-col">
                        <FeatureCard data={services[0]} visible={showCards} delay={0.2} />
                        <FeatureCard data={services[2]} visible={showCards} delay={0.4} />
                    </Col>

                    <Col lg={4} md={12} className="phone-center-wrap my-5 my-lg-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="phone-perspective-container"
                            style={{ rotateY, rotateX }}
                        >
                            <div className="iphone-frame">
                                <img
                                    src="https://cdn.prod.website-files.com/671cca0a8868f98a83ff3236/671cca28ba28fa824675a524_iPhone%2014%20Pro.avif"
                                    alt="iPhone"
                                    className="iphone-img"
                                />
                                <div className="screen-content">
                                    <video
                                        src="/assets/img/home/mobile-vdio2.mp4"
                                        className="app-screen"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                </div>
                            </div>
                            <div className="phone-back-glow " />
                        </motion.div>
                    </Col>

                    <Col lg={4} md={12} className="features-column right-col">
                        <FeatureCard data={services[1]} visible={showCards} delay={0.3} />
                        <FeatureCard data={services[3]} visible={showCards} delay={0.5} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ServiceSection;