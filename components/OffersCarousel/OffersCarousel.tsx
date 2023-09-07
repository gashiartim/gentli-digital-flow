import React from "react";
import HeadlineText from "../shared/HeadlineText/HeadlineText";
import Carousel from "../shared/Carousel/Carousel";
import { offers } from "./offers";
import OfferCard from "./OfferCard/OfferCard";

type OffersCarouselProps = {};

const OffersCarousel: React.FC<OffersCarouselProps> = () => {
  return (
    <div className="container">
      <HeadlineText>ME ZBRITJE</HeadlineText>
      <Carousel
        name="offers-carousel"
        settings={{ slidesToShow: 6, speed: 1000 }}
      >
        {offers.map((item, index) => {
          return <OfferCard key={`offers-${item.price}-${index}`} {...item} />;
        })}
      </Carousel>
    </div>
  );
};
export default OffersCarousel;
