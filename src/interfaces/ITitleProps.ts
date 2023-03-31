export interface ITitleContainerProps {
  type: 'publications' | 'experiences' | 'projects'
}

export interface ITitleProps extends ITitleContainerProps {
  title: string
}
