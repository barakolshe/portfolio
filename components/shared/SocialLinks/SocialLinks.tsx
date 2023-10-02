import { FunctionComponent } from "react";
import { Button } from "../../ui/Button/Button";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const icons = [
  {
    name: "twitter",
    path: "/icons/twitter.svg",
    className: "bg-twitter hover:bg-twitter-hover",
  },
  {
    name: "linkedin",
    path: "/icons/linkedin.svg",
    className: "bg-linkedin hover:bg-linkedin-hover",
  },
  {
    name: "github",
    path: "/icons/github.svg",
    className: "bg-github hover:bg-github-hover",
  },
];

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: FunctionComponent<SocialLinksProps> = ({ className }) => {
  return (
    <div className={twMerge("flex flex-row gap-3", className)}>
      {icons.map((icon) => {
        return (
          <Button size="icon" className={icon.className} key={icon.name}>
            <Image src={icon.path} alt={icon.name} height={15} width={15} />
          </Button>
        );
      })}
    </div>
  );
};

export default SocialLinks;
