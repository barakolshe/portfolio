import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FunctionComponent, ReactNode } from "react";

interface IconProps {
  children: ReactNode;
}

const Icon: FunctionComponent<IconProps> = ({ children }) => {
  return (
    <div className="group bg-card rounded-full shadow-md h-14 w-14 relative mx-auto">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px] group-hover:scale-110 transition-transform">
        {children}
      </div>
    </div>
  );
};

export default Icon;
