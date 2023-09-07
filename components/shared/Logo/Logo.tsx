import classNames from "classnames";
import Image from "next/image";
import React from "react";

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className }) => {
  const logoWrapperClassNames = classNames(
    "relative h-[60px] w-[90px]",
    className
  );

  return (
    <div className={logoWrapperClassNames}>
      <Image
        src="https://gentli.com/wp-content/uploads/2022/02/gentlismall.png"
        alt="Logo"
        sizes="100%"
        fill
        className="object-contain"
      />
    </div>
  );
};
export default Logo;
