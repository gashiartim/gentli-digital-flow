import React from "react";
import Logo from "../shared/Logo/Logo";
import Icon from "../shared/Icon/Icon";
import { IconType } from "../shared/Icon/IconTypes";
import { locations } from "./locations";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="mt-[185px]">
      <div className="bg-neutral-50 border-t border-neutral-100">
        <div className="container flex py-16 justify-between">
          <div className="text-gray-500">
            <Logo className="mb-8" />
            <ul className="font-extralight">
              <li className="flex py-2">
                <Icon type={IconType.EMAIL} className="w-5 h-5 mr-2" />
                <span>info@gentli.com</span>
              </li>
              <li className="flex py-2">
                <Icon type={IconType.PHONE} className="w-5 h-5 mr-2" />
                <span>+383 44 480 100</span>
              </li>

              <li className="mt-8 flex gap-x-5">
                <Icon className="h-6 w-6 " type={IconType.FACEBOOK} />
                <Icon className="h-6 w-6 " type={IconType.INSTAGRAM} />
              </li>
            </ul>
          </div>
          <div className="text-gray-500 font-light text-[14px]">
            <ul className="flex flex-col gap-5 flex-wrap max-h-[250px]">
              {locations.map((item, index) => (
                <li key={`location-${index}-${item}`} className="flex gap-x-2">
                  <Icon type={IconType.LOCATION} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="text-right flex flex-col gap-y-2">
              <li>Rreth Nesh</li>
              <li>Pyetjet me te shpeshta</li>
              <li>CASHBACK</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-sm py-5 font-light relative">
        © Copyright 2023
        <div className="absolute right-5 top-1/2 -translate-y-1/2">
          Powered by:
          <b>Artim Gashi</b>
        </div>
      </div>
    </div>
  );
};
export default Footer;
