import PageLayout from '../../app/routes';

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="card">
        <h1>Contact</h1>
        <p>Interested in working together? Reach out through the details below.</p>
        <div className="contact-list">
          <p><strong>Email:</strong> name@example.com</p>
          <p><strong>GitHub:</strong> github.com/your-username</p>
        </div>
      </div>
    </PageLayout>
  );
}
