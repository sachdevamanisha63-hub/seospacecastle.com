"use client";
import React from "react";
import HeroHome from "./Hero-Home";
import ServiceSection from "./Service-Section";
import WhyChoose from "./WhyChoose";

const HomePage = () => {
    return (
        <>
            <HeroHome />
            <ServiceSection />
            <WhyChoose />
        </>
    );
};

export default HomePage;