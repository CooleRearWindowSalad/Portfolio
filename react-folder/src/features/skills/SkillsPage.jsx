import PageLayout from '../../app/routes';
import portfolioData from '../../data/portfolio.json';

const { skills } = portfolioData;

export default function SkillsPage() {
  return (
    <PageLayout>
      <div className="card">
        <h1>Skills</h1>
        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">{skill}</span>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
