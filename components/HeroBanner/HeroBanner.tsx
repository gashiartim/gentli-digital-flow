import React from "react";
import Carousel from "../shared/Carousel/Carousel";
import Image from "next/image";

type HeroBannerProps = {};

const HeroBanner: React.FC<HeroBannerProps> = () => {
  return (
    <div className="mt-3 container">
      <Carousel name="hero-banner-carousel">
        {[
          "https://gentli.com/wp-content/uploads/2023/08/Zbritje_Finale_WEB-1.jpg",
          "https://gentli.com/wp-content/uploads/2023/08/BM03-001-15.jpg",
          "https://gentli.com/wp-content/uploads/2022/09/Blej-knAPP-Web-Cover-v2-1.png",
        ].map((item, index) => (
          <div
            key={`carousel-item-${index}`}
            className="h-[600px] flex relative items-center flex-col justify-center text-white font-extrabold"
          >
            <Image
              src={item}
              alt="Zbritje"
              sizes="100%"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default HeroBanner;
