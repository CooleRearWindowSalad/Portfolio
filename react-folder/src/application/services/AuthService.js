import { loginUser as loginUserUseCase } from '../use-cases/LoginUser';
import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { UserId } from '../../domain/value-objects/UserId';
import { apiClient } from '../../infrastructure/api/apiClient';
import { tokenService } from '../../infrastructure/auth/TokenService';
import { storage } from '../../infrastructure/storage/storage';

export async function loginUser(credentials = {}) {
  const apiResponse = await apiClient.post('/posts', {
    title: 'login',
    body: credentials,
    userId: 1
  }).catch(() => null);

  const user = await loginUserUseCase({
    ...credentials,
    source: apiResponse ? 'api' : 'fallback'
  });

  const userRepository = new UserRepository();
  const userId = new UserId(user.id);
  const defaultUser = userRepository.getAll().find((storedUser) => storedUser.email === user.email) || User;

  tokenService.saveToken(user.token);
  storage.save('app-user', {
    ...user,
    userId: userId.value,
    role: defaultUser.role || 'user',
    apiResponse
  });

  return {
    ...user,
    userId: userId.value,
    role: defaultUser.role || 'user',
    apiResponse
  };
}
