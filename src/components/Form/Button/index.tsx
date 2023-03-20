import { ButtonContainer } from "./styles";

import { IButtonProps } from "@/interfaces/IButtonProps";

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
}: IButtonProps) {
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
