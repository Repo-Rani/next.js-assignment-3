export interface toggleButtonType {
  isOpen: boolean;
  toggleMenu: () => void;
}

export interface SkillsItemsTypes {
  Skills: string;
  percentage: string;
}

export interface SkillsTypes {
  title: string;
  icon: string;
  skills: SkillsItemsTypes[];
}

export interface SkillsCardPropsTypes {
  iconUrl: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export interface SkillInfoCardTypes {
  heading: string;
  skills: SkillsItemsTypes[];
}

export interface ExperienceType {
  title: string;
  date: string;
  responsibilities: string[];
}
export interface DetailedPropsType {
  detail: ExperienceType;
}

export interface ContactInfoTypes {
  iconUrl: string;
  text: string;
}
