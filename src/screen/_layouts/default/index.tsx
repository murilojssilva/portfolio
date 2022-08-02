import { Outlet } from "react-router-dom";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";

interface DefaultLayoutProps {
  toggleTheme(): void;
}

export function DefaultLayout({ toggleTheme }: DefaultLayoutProps) {
  return (
    <div>
      <Header toggleTheme={toggleTheme} />
      <Outlet />
      <Footer />
    </div>
  );
}
