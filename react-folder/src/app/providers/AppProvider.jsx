import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export function AppProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('app-user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('app-user', JSON.stringify(user));
      return;
    }

    localStorage.removeItem('app-user');
  }, [user]);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      isAuthenticated: Boolean(user)
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used inside AppProvider');
  }

  return context;
}
