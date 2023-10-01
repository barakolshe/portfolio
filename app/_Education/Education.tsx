import EducationCard from "@/components/shared/EducationCard/EducationCard";
import { FunctionComponent } from "react";

interface EducationProps {}

const educationArray = [
  {
    place: "Ort Darski High School",
    title: "Computer Science Major",
    achievements: ["Finished with honors"],
    description:
      "Studied C and Arduino, and learned planty of information about computers under the hood and about electricity.",
    dates: "2015 - 2018",
  },
  {
    place: "Magshimim",
    title: "Computer Science",
    achievements: ["Finished with honors"],
    description:
      "Studied computers and made a lot of projects in C++, C and python.",
    dates: "2015 - 2018",
  },
  {
    place: "IDF GAMA course",
    title: "Computer Science",
    achievements: [],
    description:
      "A highly sought after course of the intelligence corps.\nLearned valuble information about programming and computers",
    dates: "Feb 2019 - May 2019",
  },
  {
    place: "The Open University",
    title: "Computer Science",
    achievements: ["Currently studying"],
    description: "Currently working on my computer science degree.",
    dates: "2022 - Today",
  },
];

const Education: FunctionComponent<EducationProps> = () => {
  return (
    <div className="gradient-background angled-bottom pt-3">
      <p className="title text-white">Education</p>
      <div className="container grid grid-cols-1 gap-3 pt-3 md:grid-cols-2 lg:grid-cols-3">
        {educationArray.map((education) => (
          <EducationCard
            key={education.description}
            className="w-100%"
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
