import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  content: string;
  icon?: ReactNode;
  target?: string;
  type?: string;
  hasLink: boolean;
  href?: string;
}

export function Button({
  content,
  icon,
  target,
  type,
  href,
  hasLink = false,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      href={href}
      hasLink={hasLink}
      target={target}
      type={type}
      {...rest}
    >
      {icon} {content}
    </ButtonContainer>
  );
}
