import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Dash } from "react-bootstrap-icons";

const faqData = [
    {
        question: "How does the 'Space Castle' process work?",
        answer: "We embark on a multi-stage journey from discovery and cosmic mapping to final launch, ensuring your digital empire is built on a foundation of technical precision and creative brilliance."
    },
    {
        question: "What technologies do you specialize in?",
        answer: "Our core expertise lies in React, Next.js, and modern UI frameworks, blended with advanced animations through Framer Motion to create immersive, high-end user experiences."
    },
    {
        question: "Can I get a custom audit for my existing site?",
        answer: "Absolutely. We provide comprehensive digital audits that analyze performance, UI/UX flow, and SEO strategy to identify opportunities for cosmic growth."
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Building the castle is just the start. We offer continuous maintenance and optimization plans to ensure your platform remains at the forefront of digital innovation."
    }
];

const FAQs = () => {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <section className="faq-section">
            <div className="cosmic-bg">
                <div className="glow-sphere gold-glow"></div>
            </div>

            <div className="container">
                <div className="faq-header text-center">
                    <span className="faq-tag">✦ QUICK CLARITY</span>
                    <h2 className="faq-title">
                        Got questions? We’ve got the <span className="text-gradient">solutions</span>
                    </h2>
                </div>

                <div className="faq-list">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeId === index ? "active" : ""}`}
                            onClick={() => setActiveId(activeId === index ? null : index)}
                        >
                            <div className="faq-question">
                                <span className="question-text">{faq.question}</span>
                                <div className="toggle-icon">
                                    {activeId === index ? <Dash size={24} /> : <Plus size={24} />}
                                </div>
                            </div>

                            <AnimatePresence>
                                {activeId === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        className="faq-answer-wrapper"
                                    >
                                        <div className="faq-answer">
                                            <p>{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;