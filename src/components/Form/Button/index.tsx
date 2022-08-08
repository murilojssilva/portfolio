import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  content: string;
  icon?: ReactNode;
  target?: string;
  type?: string;
  hasLink?: boolean;
  hasDeploy?: boolean;
  href?: string;
  deploy?: string;
}

export function Button({
  content,
  icon,
  target,
  type,
  href,
  deploy,
  hasLink = false,
  hasDeploy = false,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      href={href}
      deploy={deploy}
      hasLink={hasLink}
      hasDeploy={hasDeploy}
      target={target}
      type={type}
      {...rest}
    >
      {icon} {content}
    </ButtonContainer>
  );
}
