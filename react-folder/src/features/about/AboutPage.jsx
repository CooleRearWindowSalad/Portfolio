import PageLayout from '../../app/routes';

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="card">
        <h1>About me</h1>
        <p>
          I am a motivated frontend developer focused on building responsive web interfaces with React.
          I enjoy translating ideas into real products with strong UX and clean code.
        </p>
        <p>
          My approach combines technical quality with design awareness: I care about details,
          maintainability, and a smooth user experience on every screen size.
        </p>
      </div>
    </PageLayout>
  );
}
