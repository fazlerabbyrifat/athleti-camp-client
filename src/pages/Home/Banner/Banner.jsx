import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import slideImage1 from "../../../assets/slider/slider1.jpg";
import slideImage2 from "../../../assets/slider/slider2.jpg";
import slideImage3 from "../../../assets/slider/slider3.jpg";
import slideImage4 from "../../../assets/slider/slider4.jpg";
import slideImage5 from "../../../assets/slider/slider5.jpg";
import slideImage6 from "../../../assets/slider/slider6.jpg";
import slideImage7 from "../../../assets/slider/slider7.jpg";
import slideImage8 from "../../../assets/slider/slider8.jpg";
import slideImage9 from "../../../assets/slider/slider9.jpg";
import slideImage10 from "../../../assets/slider/slider10.jpg";
import './Banner.css'

const Banner = () => {
  const slides = [
    {
      image: slideImage1,
      title: "Welcome to our Summer Athletics Camp",
      description:
        "Join us for a fun-filled summer of athletics training and development. Discover new skills, make friends, and have a memorable experience!",
    },
    {
      image: slideImage2,
      title: "Track and Field",
      description:
        "Experience the thrill of track and field events such as sprinting, long jump, high jump, hurdles, and relays. Learn proper techniques and improve your speed and agility.",
    },
    {
      image: slideImage3,
      title: "Throwing Events",
      description:
        "Explore the art of throwing events including shot put, discus, and javelin. Develop strength, coordination, and precision in your throws.",
    },
    {
      image: slideImage4,
      title: "Jumping Events",
      description:
        "Learn the techniques of jumping events like long jump and high jump. Improve your take-off, flight, and landing to achieve greater distances and heights.",
    },
    {
      image: slideImage5,
      title: "Endurance Training",
      description:
        " Enhance your stamina and endurance through activities such as long-distance running, cross-country, and marathon training. Build your cardiovascular fitness and mental resilience.",
    },
    {
      image: slideImage6,
      title: "Team Sports",
      description:
        "Engage in team sports like basketball, soccer, and volleyball to develop teamwork, communication, and strategic thinking skills. Enjoy friendly competitions and teamwork-oriented games.",
    },
    {
      image: slideImage7,
      title: "Sportsmanship and Character Building",
      description:
        "Emphasize the importance of sportsmanship, fair play, and building character through athletics. Foster values such as discipline, perseverance, and respect for oneself and others.",
    },
    {
      image: slideImage8,
      title: "Specialized Coaching",
      description:
        "Benefit from our experienced coaches who provide specialized training in various athletic disciplines. Receive personalized guidance to help you reach your full potential.",
    },
    {
      image: slideImage9,
      title: "Fun and Recreational Activities",
      description:
        "Take part in enjoyable recreational activities such as swimming, hiking, and obstacle courses. Relax, unwind, and have fun while building your overall fitness.",
    },
    {
      image: slideImage10,
      title: "Join the Summer Athletics Camp",
      description:
        "Register now to secure your spot in our Summer Athletics Camp. Experience a transformative summer filled with athletics, personal growth, and unforgettable memories.",
    },
  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      effect: "cube",
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="swiper-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slider-content">
              <h3 className="text-3xl font-bold mb-4 text-red-500">{slide.title}</h3>
              <p className="text-xl font-medium text-green-500">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Banner;
