import React from "react";
import AnimatedText from "../AnimatedText/AnimatedText";
import Logo from "../shared/Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Icon from "../shared/Icon/Icon";
import { IconType } from "../shared/Icon/IconTypes";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <AnimatedText
        text="PAGUAJ ME KARTELË DHE KESH • BLEJ DERI NË 6 KËSTE (VETËM ONLINE) • KTHIM
       DHE NDËRRIM BRENDA 14 DITËVE"
      />
      <div className="flex items-center space-x-6 container mt-3">
        <Logo />
        <div className="flex items-baseline pt-6 flex-1">
          <Navigation />
          <div className="flex ml-auto space-x-3">
            <Icon type={IconType.SEARCH} className="h-6 w-6" />
            <Icon type={IconType.USER} className="h-6 w-6" />
            <Icon type={IconType.CART} className="h-6 w-6" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
