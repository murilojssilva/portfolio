import { ButtonContainer } from "./styles";

import { IButtonProps } from "@/interfaces/IButtonProps";

export function Button({
  content,
  icon,
  target,
  type,
  href,
  deploy,
  ...rest
}: IButtonProps) {
  return (
    <ButtonContainer
      href={href}
      deploy={deploy}
      target={target}
      type={type}
      {...rest}
    >
      {icon} {content}
    </ButtonContainer>
  );
}
