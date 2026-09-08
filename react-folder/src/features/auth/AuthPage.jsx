import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { loginUser } from '../../application/services/AuthService';
import { ROUTES } from '../../shared/constants/routes';
import { AUTH_CONFIG } from '../../shared/types';
import { useAuth } from '../../shared/hooks/useAuth';

export default function AuthPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!form.email || !form.password) {
      setError('Email and password are required');
      return;
    }

    if (form.password.length < AUTH_CONFIG.minPasswordLength) {
      setError(`Password must be at least ${AUTH_CONFIG.minPasswordLength} characters`);
      return;
    }

    try {
      setIsSubmitting(true);
      const user = await loginUser(form);
      login(user);
      navigate(ROUTES.DASHBOARD, { replace: true });
    } catch (submitError) {
      setError(submitError.message || 'Login failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <p className="helper-text">Use any valid email and a password with 6+ characters.</p>
        {error && <p className="error">{error}</p>}
        <label>
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            placeholder="demo@example.com"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={form.password}
            onChange={(event) => setForm({ ...form, password: event.target.value })}
            placeholder="••••••"
          />
        </label>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Signing in...' : 'Login'}
        </Button>
      </form>
    </div>
  );
}
