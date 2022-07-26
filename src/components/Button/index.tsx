import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  content: string;
  icon?: any;
  href: string;
  target: string;
}

export function Button({ content, icon, href, target }: ButtonProps) {
  return (
    <ButtonContainer href={href} target={target}>
      {icon} {content}
    </ButtonContainer>
  );
}
