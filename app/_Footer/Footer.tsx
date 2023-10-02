import SocialLinks from "@/components/shared/SocialLinks/SocialLinks";
import { FunctionComponent } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { footer } from "@/config/config";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="gradient-background-primary w-full pb-12 pt-6">
      <div className=" container flex flex-col gap-3 align-middle">
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2">
          <div className="flex flex-col gap-4 align-middle">
            <p className="text-center text-2xl  font-semibold text-primary-foreground">
              {footer.title}
            </p>
            <div className="mx-auto flex w-max flex-row gap-1 rounded-md bg-primary-foreground p-2 text-2xs font-semibold leading-4 text-primary">
              <MapPinIcon height={15} width={15} className="my-auto inline" />
              {footer.location}
            </div>
            <SocialLinks className="mx-auto" />
          </div>
          <div className="relative mx-auto my-auto h-[150px] w-[150px] overflow-hidden rounded-full">
            <Image
              src={footer.image}
              alt={footer.imageAlt}
              fill={true}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
