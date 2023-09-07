import React from "react";
import HeadlineText from "../shared/HeadlineText/HeadlineText";
import { categories } from "./categories-data";
import Image from "next/image";

type CategoriesProps = {};

const Categories: React.FC<CategoriesProps> = () => {
  return (
    <div className="container">
      <HeadlineText>KATEGORITË</HeadlineText>
      <div className="grid grid-cols-4 gap-2">
        {categories.map((item, index) => (
          <div key={`category-${index}`} className="h-[315px] w-full relative">
            <Image
              src={item.image}
              alt={`Category: ${item.label} Image`}
              fill
              sizes="100%"
              className="object-cover"
            />
            <div className="absolute bottom-0 h-1/4 w-full inset-x-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
            <div className="absolute bottom-[10px] w-full text-white font-bold text-xl uppercase text-center">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;
