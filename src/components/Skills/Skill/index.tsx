import { SkillContainer } from './styles'
import { ISkillProps } from '@/interfaces/ISkillProps'

export function Skill({
  color,
  title,
  description,
  subtitle,
  skills,
  toolsTitle,
  tools,
  icon,
}: ISkillProps) {
  return (
    <SkillContainer color={color}>
      <span>{icon}</span>
      <h1>{title}</h1>
      <strong>{description}</strong>
      <h3>{subtitle}</h3>
      <p>{skills}</p>
      <h3>{toolsTitle}</h3>
      <ul>
        {tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
    </SkillContainer>
  )
}
