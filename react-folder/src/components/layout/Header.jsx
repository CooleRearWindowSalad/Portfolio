import { Link } from 'react-router-dom';
import { ROUTES } from '../../shared/constants/routes';

export default function Header() {
  return (
    <header className="header">
      <div className="brand">React Folder</div>
      <nav className="nav">
        <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
        <Link to={ROUTES.PROFILE}>Profile</Link>
      </nav>
    </header>
  );
}
