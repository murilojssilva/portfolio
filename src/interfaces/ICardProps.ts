import { ITechsProps } from "./ITechsProps";

interface ITypeProps {
  type?:
    | "challenge"
    | "personal"
    | "academic"
    | "bootcamp"
    | "professional"
    | "none";
  colorTop: "projects" | "experiences" | "publications";
}

export interface ICardsProps extends ITechsProps, ITypeProps {
  stack?: "mobile" | "backend" | "frontend" | "fullstack";
  title: string;
  hasLink?: boolean;
  hasDeploy?: boolean;
  subtitle?: string;
  href?: string;
  deploy?: string;
  iconButton?: "GitHub" | "GitLab" | "Paper" | "Deploy";
  inDevelopment?: boolean;
  last_commit?: string;
}

export interface ICardsContainerProps extends ITypeProps {}

export interface IInDevelopmentProps {
  inDevelopment?: boolean;
}

export interface ILinksProps {
  hasDeploy?: boolean;
  hasLink?: boolean;
}
