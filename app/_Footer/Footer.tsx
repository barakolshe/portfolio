import SocialLinks from "@/components/shared/SocialLinks/SocialLinks";
import { FunctionComponent } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="gradient-background-primary container flex flex-col gap-3 pb-12 pt-6 align-middle">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-around  align-middle">
          <p className="text-center text-2xl  font-semibold text-primary-foreground">
            Reach out to me!
          </p>
          <div className="mx-auto flex w-max flex-row gap-1 rounded-md bg-primary-foreground p-2 text-2xs font-semibold leading-4 text-primary">
            <MapPinIcon height={15} width={15} className="my-auto inline" />
            Tel Aviv, Israel
          </div>
          <SocialLinks className="mx-auto" />
        </div>
        <div className="relative mx-auto my-auto h-[150px] w-[150px] overflow-hidden rounded-full">
          <Image
            src="/images/my_image3.jpg"
            alt="Barak Olshevizky"
            fill={true}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
