import { Outlet } from "react-router-dom";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { LayoutContainer } from "./styles";

interface DefaultLayoutProps {
  toggleTheme(): void;
}

export function DefaultLayout({ toggleTheme }: DefaultLayoutProps) {
  return (
    <LayoutContainer>
      <Header toggleTheme={toggleTheme} />
      <Outlet />
      <Footer />
    </LayoutContainer>
  );
}
