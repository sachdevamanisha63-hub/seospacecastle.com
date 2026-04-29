"use client";
import React from "react";
import HeroHome from "./Hero-Home";
import ServiceSection from "./Service-Section";
import WhyChoose from "./WhyChoose";
import Marquee from "./Marquee";

const HomePage = () => {
    return (
        <>
            <HeroHome />
            
            <ServiceSection />
            <WhyChoose />
            <Marquee/>
        </>
    );
};

export default HomePage;