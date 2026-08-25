import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { loginUser } from '../../application/services/AuthService';
import { ROUTES } from '../../shared/constants/routes';
import { useAuth } from '../../shared/hooks/useAuth';
import { useState } from 'react';

export default function AuthPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.email || !form.password) {
      setError('Email and password are required');
      return;
    }

    const user = await loginUser(form);
    login(user);
    navigate(ROUTES.DASHBOARD, { replace: true });
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        {error && <p className="error">{error}</p>}
        <label>
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={form.password}
            onChange={(event) => setForm({ ...form, password: event.target.value })}
          />
        </label>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
