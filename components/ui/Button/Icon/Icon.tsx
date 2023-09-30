import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FunctionComponent } from "react";

interface IconProps {
  path: string | StaticImport;
  alt: string;
}

const Icon: FunctionComponent<IconProps> = ({ path, alt }) => {
  return (
    <div className="bg-card rounded-full shadow-md h-14 w-14 relative">
      <Image
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        src={path}
        alt={alt}
        height={30}
        width={30}
      />
    </div>
  );
};

export default Icon;
