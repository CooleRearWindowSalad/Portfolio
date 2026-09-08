import PageLayout from '../../app/routes';
import { useAuth } from '../../shared/hooks/useAuth';
import { formatDate, formatName } from '../../shared/utils/format';

export default function DashboardPage() {
  const { user } = useAuth();
  const today = formatDate(new Date());

  return (
    <PageLayout>
      <div className="card">
        <h1>Welcome, {formatName(user?.name)}</h1>
        <p>You are logged in and ready to work.</p>
        <p><strong>Last login:</strong> {today}</p>
      </div>
    </PageLayout>
  );
}
