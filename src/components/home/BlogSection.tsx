import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowUpRight } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';

const blogPosts = [
    {
        id: 1,
        title: "UI/UX Design Principles for Better User Engagement",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        category: "Design"
    },
    {
        id: 2,
        title: "Why Your Business Needs a Mobile-Optimized Website",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
        category: "Development"
    },
    {
        id: 3,
        title: "Content Marketing Essentials for Growing Your Brand",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        category: "Marketing"
    }
];

const BlogSection: React.FC = () => {
    return (
        <section className="blog-section">
            <div className="cosmic-bg">
                <div className="glow-sphere gold-glow"></div>
                <div className="glow-sphere red-glow"></div>
            </div>


            <Container className="position-relative z-1">
                <header className="blog-header d-flex flex-column flex-lg-row align-items-end mb-5">
                    <div className="header-left">
                        <div className="latest-news-tag">
                            <span className="asterisk">*</span> LATEST NEWS
                        </div>
                        <h2 className="blog-main-title mt-3">
                            Insights on digital <span className="text-gradient">innovation</span> and growth
                        </h2>
                    </div>
                    <div className="header-right ms-lg-auto mt-4 mt-lg-0">
                        <p className="blog-description">
                            Explore the latest trends, strategies, and tools driving digital innovation
                            and helping businesses thrive in a rapidly evolving digital landscape.
                        </p>
                    </div>
                </header>

                <Row className="g-4">
                    {blogPosts.map((post, index) => (
                        <Col key={post.id} lg={4} md={6}>
                            <motion.div
                                className="blog-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="blog-image-container">
                                    <img src={post.image} alt={post.title} className="blog-img" />
                                    <div className="category-badge">{post.category}</div>
                                    <div className="image-overlay"></div>
                                </div>
                                <div className="blog-content">
                                    <h3 className="blog-card-title">{post.title}</h3>
                                    <div className="blog-footer">
                                        <a href="#" className="read-more-btn">
                                            <span>Read More</span>
                                            <div className="icon-circle">
                                                <ArrowUpRight />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default BlogSection;