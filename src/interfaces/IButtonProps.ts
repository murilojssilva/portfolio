import { ReactNode } from "react";

export interface IButtonContainerProps {
  hasLink?: boolean;
  hasDeploy?: boolean;
  deploy?: string;
}

export interface IButtonProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    IButtonContainerProps {
  content: string;
  icon?: ReactNode;
  target?: string;
  type?: string;
  href?: string;
}
