import React from "react";
import HeadlineText from "../shared/HeadlineText/HeadlineText";
import Carousel from "../shared/Carousel/Carousel";
import { brandsData } from "./brands-data";
import Image from "next/image";

type BrandsProps = {};

const Brands: React.FC<BrandsProps> = () => {
  return (
    <div className="container">
      <HeadlineText>BRENDET</HeadlineText>
      <Carousel name="brands-carousel" settings={{ slidesToShow: 6 }}>
        {brandsData.map((item, index) => (
          <div
            key={`brand-${item.label}-${index}`}
            className="relative w-full h-[140px]"
          >
            <Image
              src={item.image}
              alt={`Brand: ${item.label} Image`}
              sizes="100%"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </Carousel>
      <div className="grid grid-cols-2 gap-8">
        {brandsData.map((item) => {
          return item.offers?.map((offer, idx) => (
            <div
              key={`brand-images-${item.label}-${idx}`}
              className="w-full h-[625px] relative bg-red-400"
            >
              <Image
                alt={`Brand image - ${item.label}`}
                src={offer.image}
                fill
                sizes="100%"
                className="object-cover"
              />
              <div className="absolute left-5 bottom-5 flex gap-2">
                {offer.genders.map((gender, idx) => (
                  <div
                    key={`gender-${item.label}-${idx}-${gender}`}
                    className="bg-white py-3 px-6 font-semibold cursor-pointer"
                  >
                    {gender}
                  </div>
                ))}
              </div>
            </div>
          ));
        })}
      </div>
    </div>
  );
};
export default Brands;
