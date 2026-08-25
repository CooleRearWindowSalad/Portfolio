import { apiClient } from '../../infrastructure/api/apiClient';

export async function loginUser(credentials) {
  try {
    const response = await apiClient.post('/posts', {
      title: 'login',
      body: credentials,
      userId: 1
    });

    return {
      id: response?.id || 1,
      name: credentials.email.split('@')[0],
      email: credentials.email,
      token: 'demo-token-123'
    };
  } catch (error) {
    return {
      id: 1,
      name: credentials.email.split('@')[0],
      email: credentials.email,
      token: 'demo-token-123'
    };
  }
}
