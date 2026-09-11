import PageLayout from '../../app/routes';

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="card">
        <h1>Contact</h1>
        <p>Interested in working together? Reach out through the details below.</p>
        <div className="contact-list">
          <p><strong>Email:</strong> under maintenance</p>
          <p><strong>GitHub:</strong> <a href="https://github.com/CooleRearWindowSalad" target="_blank" rel="noreferrer">CooleRearWindowSalad</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rosa-safai" target="_blank" rel="noreferrer">Rosa Safai</a></p>
        </div>
      </div>
    </PageLayout>
  );
}
