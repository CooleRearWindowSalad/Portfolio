import { Link } from 'react-router-dom';
import { ROUTES } from '../../shared/constants/routes';
import LogoImage from '../../images/Navbar-logo.png';

export default function Header() {
  return (
    <header className="header">
      <Link className="brand" to={ROUTES.HOME}>
        <img className="navbar-logo" src={LogoImage} alt="Logo" />
        <span>Rosa's portfolio</span>
      </Link>
      <nav className="nav">
        <Link to={ROUTES.ABOUT}>About</Link>
        <Link to={ROUTES.PROJECTS}>Projects</Link>
        <Link to={ROUTES.CONTACT}>Contact</Link>
      </nav>
    </header>
  );
}
