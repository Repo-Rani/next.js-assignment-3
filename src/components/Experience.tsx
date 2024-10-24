"use client";
import React, { useRef } from "react";
import ExperienceCard from "./ExperienceCrad";
import { EXPERIENCE } from "@/data/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "boxicons/css/boxicons.min.css";
import { ExperienceType } from "../../Types/types";
const Experience = () => {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current?.slickNext();
  };
  const slideLeft = () => {
    sliderRef.current?.slickPrev();
  };
  return (
    <section className="exp-container" id="experience">
      <h5>Work Experience</h5>
      <div className="exp-content">
        <div className="arrow-right" onClick={slideRight}>
          <span className="">
            <i className="bx bxs-chevron-right"></i>
          </span>
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <span className="">
            <i className="bx bxs-chevron-left"></i>
          </span>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {EXPERIENCE.map((item: ExperienceType) => (
            <ExperienceCard key={item.title} detail={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Experience;
