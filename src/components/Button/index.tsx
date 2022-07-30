import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  content: string;
  icon?: ReactNode;
  href?: string;
  target?: string;
  type?: string;
  hasLink: boolean;
}

export function Button({
  content,
  icon,
  href,
  target,
  type,
  hasLink = false,
}: ButtonProps) {
  return (
    <ButtonContainer hasLink={hasLink} href={href} target={target} type={type}>
      {icon} {content}
    </ButtonContainer>
  );
}
