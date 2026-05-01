"use client";
import React from "react";
import HeroHome from "./Hero-Home";
import ServiceSection from "./Service-Section";
import WhyChoose from "./WhyChoose";
import Reels from "./Reels";
import ContactForm from "./Contact-Form";
import ServiceArc from "./Marquee";
import BlogSection from "./BlogSection";
import FAQs from "./Faqs";


const HomePage = () => {
    return (
        <>
            <HeroHome />
            <ServiceSection />
            <WhyChoose />
            <Reels />
            <ContactForm />
            <ServiceArc />
            <FAQs />
            <BlogSection />
        </>
    );
};

export default HomePage;