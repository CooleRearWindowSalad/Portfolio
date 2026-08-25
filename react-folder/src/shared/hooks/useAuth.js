import { useAuthContext } from '../../app/providers/AppProvider';

export function useAuth() {
  return useAuthContext();
}
