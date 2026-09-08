import { Link } from 'react-router-dom';
import PageLayout from '../../app/routes';
import Button from '../../components/ui/Button';
import { ROUTES } from '../../shared/constants/routes';

export default function HomePage() {
  return (
    <PageLayout>
      <section className="hero card">
        <p className="hero-kicker">Frontend Developer</p>
        <h1>Hi, I am Rosa.</h1>
        <p className="hero-text">
          I build modern, fast, and user-friendly web applications with React. This portfolio showcases
          who I am, what I build, and how I can help your team.
        </p>
        <div className="home-actions">
          <Link to={ROUTES.PROJECTS}><Button>View projects</Button></Link>
          <Link to={ROUTES.CONTACT}><Button variant="secondary">Contact me</Button></Link>
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
