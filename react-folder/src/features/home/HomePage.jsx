import { Link } from 'react-router-dom';
import PageLayout from '../../app/routes';
import Button from '../../components/ui/Button';
import { ROUTES } from '../../shared/constants/routes';
import profileImage from '../../images/profile-picture.jpg';

export default function HomePage() {
  return (
    <PageLayout>
      <section className="hero card">
        <img className="hero-image" alt="Rosa" src={profileImage} />
        <div className="hero-content">
          <p className="hero-kicker">Software Developer</p>
          <h1>Hi, I am Rosa!</h1>
          <p className="hero-text">
            I'm a third year Computer Science student at Amsterdam University of Applied Sciences (AUAS/HvA) and I build
            web applications. This portfolio showcases who I am and what I build.
          </p>
          <div className="home-actions">
            <Link to={ROUTES.PROJECTS}><Button>View projects</Button></Link>
            <Link to={ROUTES.CONTACT}><Button variant="secondary">Contact me</Button></Link>
          </div>
        </div>
      </section>

      <section className="home-grid">
        <div>
          <h3>Clean UI</h3>
          <p>Interfaces focused on clarity, accessibility, and conversion.</p>
        </div>
        <div>
          <h3>React expertise</h3>
          <p>Reusable components, routing, state management, and performance.</p>
        </div>
        <div>
          <h3>Reliable delivery</h3>
          <p>Structured workflow from idea to production-ready result.</p>
        </div>
      </section>
    </PageLayout>
  );
}
