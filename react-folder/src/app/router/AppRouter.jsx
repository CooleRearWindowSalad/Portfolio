import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import AboutPage from '../../features/about/AboutPage';
import ProjectsPage from '../../features/projects/ProjectsPage';
import SkillsPage from '../../features/skills/SkillsPage';
import ContactPage from '../../features/contact/ContactPage';
import { ROUTES } from '../../shared/constants/routes';

export default function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
      <Route path={ROUTES.SKILLS} element={<SkillsPage />} />
      <Route path={ROUTES.CONTACT} element={<ContactPage />} />
      <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
    </Routes>
  );
}
