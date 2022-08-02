import { ThemeContext, useTheme } from "styled-components";
import { HeaderContainer } from "./styles";
import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from "react";

interface HeaderProps {
  toggleTheme(): void;
}

export function Header({ toggleTheme }: HeaderProps) {
  const theme = useTheme();

  const { colors } = useContext(ThemeContext);
  return (
    <HeaderContainer>
      <h3></h3>
      <button onClick={toggleTheme}>
        {theme.title === "light" ? (
          <FaSun size={20} color={colors.text} />
        ) : (
          <FaMoon size={20} color={colors.text} />
        )}
      </button>
    </HeaderContainer>
  );
}
