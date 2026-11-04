import PageLayout from '../../app/routes';
import portfolioData from '../../data/portfolio.json';
import profileImage from '../../images/profile-picture.jpg';

const { about } = portfolioData;

export default function AboutPage() {
  return (
    <PageLayout>
      <article className="about-page">
        <section className="about-intro card">
          <img className="about-image" src={profileImage} alt={about.imageAlt} />
          <div>
            <p className="about-kicker">{about.intro.kicker}</p>
            <h1>{about.intro.title}</h1>
            {about.intro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="about-grid" aria-label={about.highlightsLabel}>
          {about.highlights.map((highlight) => (
            <div className="about-panel" key={highlight.title}>
              <h2>{highlight.title}</h2>
              <p>{highlight.text}</p>
            </div>
          ))}
        </section>

        <section className="about-focus card">
          <div>
            <p className="about-kicker">{about.focus.kicker}</p>
            <h2>{about.focus.title}</h2>
          </div>
          <p>{about.focus.text}</p>
        </section>
      </article>
    </PageLayout>
  );
}
