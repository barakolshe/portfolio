import EducationCard from "@/components/shared/EducationCard/EducationCard";
import { education } from "@/config/config";
import { FunctionComponent } from "react";

interface EducationProps {}

const Education: FunctionComponent<EducationProps> = () => {
  return (
    <div className="gradient-background-primary angled-bottom gap-section-spacing flex flex-col pt-3">
      <p className="title text-white">Education</p>
      <div className="container grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {education.map((education) => (
          <EducationCard
            key={education.description}
            place={education.place}
            title={education.title}
            achievements={education.achievements}
            description={education.description}
            dates={education.dates}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
