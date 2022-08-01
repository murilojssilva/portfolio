import { ReactNode } from "react";
import { FaReact } from "react-icons/fa";
import { SkillContainer } from "./styles";

interface SkillProps {
  color: string;
  title: string;
  description: string;
  subtitle: string;
  skills: string;
  toolsTitle: string;
  tools: string[];
  icon: ReactNode;
}

export function Skill({
  color,
  title,
  description,
  subtitle,
  skills,
  toolsTitle,
  tools,
  icon,
}: SkillProps) {
  return (
    <SkillContainer color={color}>
      <span>{icon}</span>
      <h1>{title}</h1>
      <p>{description}</p>
      <h3>{subtitle}</h3>
      <p>{skills}</p>
      <h3>{toolsTitle}</h3>
      <ul>
        {tools.map((tool) => (
          <li>{tool}</li>
        ))}
      </ul>
    </SkillContainer>
  );
}
