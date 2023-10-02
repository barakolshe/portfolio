import ExperienceCard from "@/components/shared/ExperienceCard/ExperienceCard";
import { experience } from "@/config/config";
import { FunctionComponent } from "react";

interface ExperienceProps {}

const Experience: FunctionComponent<ExperienceProps> = () => {
  return (
    <div className="gap-section-spacing flex flex-col">
      <p className="title">Experience</p>
      <div className="container grid grid-cols-1 items-stretch gap-3 md:grid-cols-2">
        {experience.map((experience) => (
          <ExperienceCard
            key={experience.description}
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
