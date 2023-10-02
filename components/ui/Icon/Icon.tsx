import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FunctionComponent, ReactNode } from "react";

interface IconProps {
  alt: string;
  src: string;
}

const Icon: FunctionComponent<IconProps> = ({ src, alt }) => {
  return (
    <div className="group relative mx-auto h-14 w-14 rounded-full bg-card shadow-md">
      <div className="absolute left-1/2 top-1/2 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 transform transition-transform group-hover:scale-110">
        <Image src={src} alt={alt} fill={true} />
      </div>
    </div>
  );
};

export default Icon;
