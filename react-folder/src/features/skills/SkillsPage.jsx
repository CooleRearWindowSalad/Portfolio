import PageLayout from '../../app/routes';

const skills = [
  'React',
  'JavaScript (ES6+)',
  'HTML5',
  'CSS3',
  'Responsive Design',
  'Git & GitHub',
  'REST APIs',
  'UI/UX Basics'
];

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
