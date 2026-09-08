import { Navigate, Route, Routes } from 'react-router-dom';
import AuthPage from '../../features/auth/AuthPage';
import DashboardPage from '../../features/dashboard/DashboardPage';
import HomePage from '../../features/home/HomePage';
import ProfilePage from '../../features/profile/ProfilePage';
import { ROUTES } from '../../shared/constants/routes';
import { useAuth } from '../../shared/hooks/useAuth';

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to={ROUTES.AUTH} replace />;
}

function PublicRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to={ROUTES.DASHBOARD} replace /> : children;
}

export default function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route
        path={ROUTES.AUTH}
        element={
          <PublicRoute>
            <AuthPage />
          </PublicRoute>
        }
      />
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
      <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
    </Routes>
  );
}
