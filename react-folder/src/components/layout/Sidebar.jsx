import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../shared/constants/routes';
import { useAuth } from '../../shared/hooks/useAuth';

export default function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.AUTH, { replace: true });
  };

  return (
    <aside className="sidebar">
      <ul>
        <li><Link to={ROUTES.HOME}>Home</Link></li>
        <li><Link to={ROUTES.DASHBOARD}>Dashboard</Link></li>
        <li><Link to={ROUTES.PROFILE}>Profile</Link></li>
        <li>
          <button type="button" className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </aside>
  );
}
