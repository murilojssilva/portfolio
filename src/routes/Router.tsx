import { Routes, Route } from "react-router-dom";
import { Contact } from "../screen/Contact";
import { Home } from "../screen/Home";

import { DefaultLayout } from "../screen/_layouts/default";

interface RouterProps {
  toggleTheme(): void;
}

export function Router({ toggleTheme }: RouterProps) {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout toggleTheme={toggleTheme} />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
