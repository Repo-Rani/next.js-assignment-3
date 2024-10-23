import React from "react";
import { DetailedPropsType } from "../../Types/types";
const ExperienceCard = ({ detail }: DetailedPropsType) => {
  return (
    <>
      <div className="exp-card">
        <h6>{detail.title}</h6>
        <div className="duration">{detail.date}</div>
        <ul>
          {detail.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExperienceCard;