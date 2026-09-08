import PageLayout from '../../app/routes';

const projects = [
  {
    title: 'E-commerce Frontend',
    description: 'React storefront with product filtering, cart flow, and checkout UI.',
    stack: 'React, React Router, CSS'
  },
  {
    title: 'Company Landing Page',
    description: 'Conversion-focused marketing page with animations and strong CTA structure.',
    stack: 'React, Vite, Responsive Design'
  },
  {
    title: 'Dashboard UI',
    description: 'Data-driven admin interface with reusable charts, cards, and tables.',
    stack: 'React, Component Architecture'
  }
];

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
