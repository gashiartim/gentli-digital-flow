import React, { ReactNode } from "react";

type HeadlineTextProps = {
  children: ReactNode;
};

const HeadlineText: React.FC<HeadlineTextProps> = ({ children }) => {
  return (
    <div className="flex justify-center relative">
      <div className="h-[1px] bg-black w-full absolute left-0 right-0 top-1/2 -translate-y-1/2"></div>
      <div className="bg-white text-lg font-extralight px-4 relative py-7">
        {children}
      </div>
    </div>
  );
};
export default HeadlineText;
