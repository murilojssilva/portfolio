import { ReactNode } from 'react'

export interface ISkillContainerProps {
  color: string
}

export interface ISkillProps extends ISkillContainerProps {
  title: string
  description: string
  subtitle: string
  skills: string
  toolsTitle: string
  tools: string[]
  icon: ReactNode
}
