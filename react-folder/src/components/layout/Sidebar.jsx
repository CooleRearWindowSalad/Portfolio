import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../shared/constants/routes';

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to={ROUTES.HOME}>Overview</Link></li>
        <li><Link to={ROUTES.ABOUT}>About me</Link></li>
        <li><Link to={ROUTES.PROJECTS}>Projects</Link></li>
        <li><Link to={ROUTES.SKILLS}>Skills</Link></li>
        <li><Link to={ROUTES.CONTACT}>Contact</Link></li>
      </ul>
    </aside>
  );
}
