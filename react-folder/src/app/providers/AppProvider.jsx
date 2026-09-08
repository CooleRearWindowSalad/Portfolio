import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { AUTH_STATUS } from '../../shared/types';
import { storage } from '../../infrastructure/storage/storage';
import { tokenService } from '../../infrastructure/auth/TokenService';

const AuthContext = createContext(null);
const USER_STORAGE_KEY = 'app-user';

export function AppProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return storage.get(USER_STORAGE_KEY);
    } catch (error) {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      storage.save(USER_STORAGE_KEY, user);
      tokenService.saveToken(user.token || tokenService.getToken() || '');
      return;
    }

    storage.clear(USER_STORAGE_KEY);
    tokenService.clearToken();
  }, [user]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      isAuthenticated: Boolean(user),
      status: user ? AUTH_STATUS.AUTHENTICATED : AUTH_STATUS.GUEST
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
