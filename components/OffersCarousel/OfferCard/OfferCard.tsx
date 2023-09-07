import Image from "next/image";
import React from "react";

type OfferCardProps = {
  price: string;
  image: string;
  oldPrice?: string;
};

const OfferCard: React.FC<OfferCardProps> = ({ price, image, oldPrice }) => {
  return (
    <div>
      <div className="max-w-[200px] h-[195px] bg-gray-500 relative">
        <Image
          src={image}
          alt="Offer Image"
          sizes="100%"
          fill
          className="object-cover"
        />
      </div>
      <div className="text-lg">
        {oldPrice && <span className="line-through mr-2">€{oldPrice}</span>}
        <span className="text-red-500">{price}</span>
      </div>
    </div>
  );
};
export default OfferCard;
