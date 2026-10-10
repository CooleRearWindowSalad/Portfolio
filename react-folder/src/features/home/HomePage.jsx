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
          <p className="hero-kicker">Software developer</p>
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
          <h3>Creative</h3>
          <p>Modern problems require creative solutions.</p>
        </div>
        <div>
          <h3>Reliable delivery</h3>
          <p>Dependable performance in delivering asked-for results.</p>
        </div>
        <div>
          <h3>Result-oriented</h3>
          <p>Focus on achieving desired outcomes.</p>
        </div>
        <div>
          <h3>Adaptable</h3>
          <p>Ability to adjust to new situations and changing requirements.</p>
        </div>
      </section>
    </PageLayout>
  );
}
