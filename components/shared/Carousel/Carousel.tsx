"use client";
import React, { Children, ReactNode } from "react";
import Slider, { Settings } from "react-slick";

type CarouselProps = {
  name: string;
  children: ReactNode[];
  settings?: Settings;
};

const Carousel: React.FC<CarouselProps> = ({ children, name, settings }) => {
  const defaultSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    ...settings,
  };

  return (
    <Slider {...defaultSettings}>
      {Children.map(children, (item, index) => {
        return <div key={`carousel-${name}-${index}`}>{item}</div>;
      })}
    </Slider>
  );
};
export default Carousel;
