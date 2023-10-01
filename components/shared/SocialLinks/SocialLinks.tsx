import { FunctionComponent } from "react";
import { Button } from "../../ui/Button/Button";
import Image from "next/image";

const icons = [
  {
    name: "twitter",
    path: "/icons/twitter.svg",
    className: "bg-[#1da1f2] hover:bg-[#0e80c4]",
  },
  {
    name: "linkedin",
    path: "/icons/linkedin.svg",
    className: "bg-[#1da1f2] hover:bg-[#0e80c4]",
  },
  {
    name: "github",
    path: "/icons/github.svg",
    className: "bg-[#222222] hover:bg-[#333333]",
  },
];

interface SocialLinksProps {}

const SocialLinks: FunctionComponent<SocialLinksProps> = () => {
  return (
    <div className="flex flex-row gap-3">
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
