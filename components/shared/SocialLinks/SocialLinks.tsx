import { FunctionComponent } from "react";
import { Button } from "../../ui/Button/Button";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { links } from "@/config/config";

const icons = [
  {
    name: "linkedin",
    path: "/icons/linkedin.svg",
    className: "bg-linkedin hover:bg-linkedin-hover",
    link: links.linkedin,
  },
  {
    name: "github",
    path: "/icons/github.svg",
    className: "bg-github hover:bg-github-hover",
    link: links.github,
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
          <a key={icon.name} href={icon.link}>
            <Button size="icon" className={icon.className}>
              <Image src={icon.path} alt={icon.name} height={15} width={15} />
            </Button>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
