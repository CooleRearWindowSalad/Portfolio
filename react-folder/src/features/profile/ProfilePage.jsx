import PageLayout from '../../app/routes';
import { useAuth } from '../../shared/hooks/useAuth';

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <PageLayout>
      <div className="card">
        <h1>Profile</h1>
        <p><strong>Name:</strong> {user?.name || 'Guest'}</p>
        <p><strong>Email:</strong> {user?.email || 'No email available'}</p>
      </div>
    </PageLayout>
  );
}
