import { Navigate, Route, Routes } from 'react-router-dom';
import AuthPage from '../../features/auth/AuthPage';
import DashboardPage from '../../features/dashboard/DashboardPage';
import ProfilePage from '../../features/profile/ProfilePage';
import { ROUTES } from '../../shared/constants/routes';
import { useAuth } from '../../shared/hooks/useAuth';

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to={ROUTES.AUTH} replace />;
}

export default function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.AUTH} element={<AuthPage />} />
      <Route
        path={ROUTES.DASHBOARD}
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTES.PROFILE}
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
    </Routes>
  );
}
