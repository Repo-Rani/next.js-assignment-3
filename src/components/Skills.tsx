"use client";
import { SKILLS } from "@/data/data";
import React from "react";
import SkillsCard from "./SkillsCard";
import { SkillsTypes } from "../../Types/types";
import { useState } from "react";
import SkillsInfoCard from "./SkillsInfo";
function Skills() {
  const [selectedSkills, setselectedSkills] = useState<SkillsTypes>(SKILLS[0]);
  const handleSelectSkill = (data: SkillsTypes) => {
    setselectedSkills(data);
  };
  return (
    <>
      <section className="skills-container" id="skills">
        <h5>Technical proficeincy</h5>

        <div className="skills-content">
          <div className="skills">
            {SKILLS.map((item) => (
              <SkillsCard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkills.title === item.title}
                onClick={() => {
                  handleSelectSkill(item);
                }}
              />
            ))}
          </div>

          <div className="skills-info">
            <SkillsInfoCard
              heading={selectedSkills.title}
              skills={selectedSkills.skills}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
