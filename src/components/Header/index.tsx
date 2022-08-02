import { ThemeContext, useTheme } from "styled-components";
import { HeaderContainer } from "./styles";
import { FaEnvelope, FaHome, FaMoon, FaSun } from "react-icons/fa";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  toggleTheme(): void;
}

export function Header({ toggleTheme }: HeaderProps) {
  const theme = useTheme();

  const { colors } = useContext(ThemeContext);
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <FaHome size={14} /> Home
        </NavLink>
        <NavLink to="/contact">
          <FaEnvelope size={14} /> Contato
        </NavLink>
      </nav>
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
