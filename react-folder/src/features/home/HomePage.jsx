import Button from '../../components/ui/Button';
import PageLayout from '../../app/routes';
import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { UserId } from '../../domain/value-objects/UserId';
import { tokenService } from '../../infrastructure/auth/TokenService';
import { storage } from '../../infrastructure/storage/storage';
import { AUTH_CONFIG, AUTH_STATUS } from '../../shared/types';
import { ROUTES } from '../../shared/constants/routes';
import { formatDate, formatName } from '../../shared/utils/format';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../shared/hooks/useAuth';

export default function HomePage() {
  const navigate = useNavigate();
  const { status, user } = useAuth();

  const repository = new UserRepository();
  const userId = new UserId(User.id);
  const storedUser = storage.get('app-user') || user;
  const token = tokenService.getToken();
  const activeStatus = status || AUTH_STATUS.GUEST;

  return (
    <PageLayout>
      <div className="card">
        <h1>Home</h1>
        <p>Welcome to the dashboard starter. This page demonstrates the app shell and the reused domain, infrastructure, and shared utilities.</p>

        <div className="home-grid">
          <div>
            <strong>Current user:</strong> {formatName(storedUser?.name || User.name || AUTH_CONFIG.defaultUserName)}
          </div>
          <div>
            <strong>User ID:</strong> {storedUser?.userId || userId.value}
          </div>
          <div>
            <strong>Status:</strong> {activeStatus}
          </div>
          <div>
            <strong>Token:</strong> {token || 'not available'}
          </div>
          <div>
            <strong>Registered users:</strong> {repository.getAll().length}
          </div>
          <div>
            <strong>Today:</strong> {formatDate(new Date())}
          </div>
        </div>

        <div className="home-actions">
          <Button onClick={() => navigate(ROUTES.AUTH)}>
            {storedUser ? 'Go to login' : 'Login'}
          </Button>
          <Button variant="secondary" onClick={() => navigate(ROUTES.DASHBOARD)}>
            Open dashboard
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
