import PageLayout from '../../app/routes';
import portfolioData from '../../data/portfolio.json';

const { projects } = portfolioData;
const { skills: skillCategories } = portfolioData;

export default function ProjectsPage() {
  return (
    <PageLayout>
      <div className="card">
        <section className="projects-skills" aria-labelledby="skills-heading">
          <h1 id="skills-heading">Skills</h1>
          <div className="skill-categories">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div className="skill-category" key={category}>
                <h2>{category}</h2>
                <div className="skills-list">
                  {skills.map((skill) => (
                    <span key={skill} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="projects-section" aria-labelledby="projects-heading">
          <h1 id="projects-heading">Projects</h1>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="helper-text"><strong>Stack:</strong> {project.stack}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
