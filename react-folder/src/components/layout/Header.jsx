import { Link } from 'react-router-dom';
import { ROUTES } from '../../shared/constants/routes';

export default function Header() {
  return (
    <header className="header">
      <div className="brand">Rosa Portfolio</div>
      <nav className="nav">
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.ABOUT}>About</Link>
        <Link to={ROUTES.PROJECTS}>Projects</Link>
        <Link to={ROUTES.SKILLS}>Skills</Link>
        <Link to={ROUTES.CONTACT}>Contact</Link>
      </nav>
    </header>
  );
}
