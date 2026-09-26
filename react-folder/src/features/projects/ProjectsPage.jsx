import PageLayout from '../../app/routes';
import portfolioData from '../../data/portfolio.json';

const { projects } = portfolioData;

export default function ProjectsPage() {
  return (
    <PageLayout>
      <div className="card">
        <h1>Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="helper-text"><strong>Stack:</strong> {project.stack}</p>
            </article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
