import ExperienceCard from "@/components/shared/ExperienceCard/ExperienceCard";
import { FunctionComponent } from "react";

interface ExperienceProps {}

const experiences = [
  {
    icon: "/icons/aman.svg",
    place: "IDF 81 Unit of the Intelligence Corps",
    title: "Full stack developer",
    description:
      "Developed cyber supporting applications for various cyber needs.\n Developed and designed complex tools in microservices archeticture using variety of technologies and working with talented people",
    dates: "Feb 2019 - Dec 2022",
  },
  {
    icon: "/icons/dove.svg",
    place: "Freelancing",
    title: "Full stack developer",
    description:
      "Developed multiple projects for personal use and via freelancing",
    dates: "Dec 2022 - Today",
  },
];

const Experience: FunctionComponent<ExperienceProps> = () => {
  return (
    <div>
      <p className="title">Experience</p>
      <div className="container grid grid-cols-1 gap-3 pt-3 md:grid-cols-2">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.description}
            className=""
            icon={experience.icon}
            place={experience.place}
            title={experience.title}
            description={experience.description}
            dates={experience.dates}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
