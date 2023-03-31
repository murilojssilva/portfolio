import { ReactNode } from "react";
import { TooltipContainer, TooltipContent, TooltipText } from "./styles";

interface ITooltipProps {
  icon: ReactNode;
  name: string;
}

export function Tooltip({ icon, name }: ITooltipProps) {
  return (
    <TooltipContainer>
      <TooltipText>
        <h3>{icon}</h3>
      </TooltipText>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </TooltipContainer>
  );
}
