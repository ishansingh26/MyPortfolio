import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import ContactMe from "./pages/ContactMe/ContactMe";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { route } from "./config/route";
import ProfessionalExprience from "./pages/ProfessionalExperience/ProfessionalExprience";
import Projects from "./pages/Projects/Projects";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path={route["/"]}
          element={<Navigate to={route.home} replace />}
        />
        <Route path={route.home} element={<Home />} />
        <Route path={route.about} element={<AboutMe />} />
        <Route path={route.experience} element={<ProfessionalExprience />} />
        <Route path={route.projects} element={<Projects />} />
        <Route path={route.contact} element={<ContactMe />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
