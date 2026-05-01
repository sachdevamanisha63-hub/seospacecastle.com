"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const reels = [
  {
    title: "Team Culture",
    text: "Creative minds building powerful digital experiences.",
    video: "/assets/videos/video1.mp4",
  },
  {
    title: "Office Moments",
    text: "Where ideas, strategy, and collaboration meet.",
    video: "/assets/videos/video2.mp4",
  },
  {
    title: "Behind The Scenes",
    text: "Daily hustle, brainstorming, and execution.",
    video: "/assets/videos/video3.mp4",
  },
  {
    title: "Celebrations",
    text: "Wins, memories, and team bonding moments.",
    video: "/assets/videos/video4.mp4",
  },
  {
    title: "Team Fun",
    text: "Memories made together.",
    video: "/assets/videos/video5.mp4",
  },
  {
    title: "Team Fun",
    text: "Memories made together.",
    video: "/assets/videos/video6.mp4",
  },
];

const Reels = () => {
  return (
    <section className="reels-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="reels-heading text-center">
              <span>Life At SeoSpaceCastle</span>
              <h2>
                Where <strong className="text-gradient">Creativity</strong> Drives Results
              </h2>
              <p>
                {/* More than a workplace — a team that builds, learns, celebrates,
                and grows together. */}
                Building brands. Creating memories. Growing together.
              </p>
            </div>
          </Col>
        </Row>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={4}
          loop
          speed={900}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            576: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          className="reels-slider"
        >
          {reels.map((reel, index) => (
            <SwiperSlide key={index}>
              <div className="reel-card">
                <div className="reel-video">
                  <video autoPlay muted loop playsInline>
                    <source src={reel.video} type="video/mp4" />
                  </video>

                  <div className="play-btn">▶</div>
                </div>

                <div className="reel-content">
                  <h3>{reel.title}</h3>
                  <p>{reel.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="reels-bottom-text text-center">

        </div>
      </Container>
    </section>
  );
};

export default Reels;