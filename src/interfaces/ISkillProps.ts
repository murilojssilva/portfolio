import { ReactNode } from "react";

export interface ISkillProps {
  color: string;
  title: string;
  description: string;
  subtitle: string;
  skills: string;
  toolsTitle: string;
  tools: string[];
  icon: ReactNode;
}
