import { Link } from 'react-router-dom';
import { ROUTES } from '../../shared/constants/routes';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to={ROUTES.DASHBOARD}>Dashboard</Link></li>
        <li><Link to={ROUTES.PROFILE}>Profile</Link></li>
        <li><Link to={ROUTES.AUTH}>Logout</Link></li>
      </ul>
    </aside>
  );
}
