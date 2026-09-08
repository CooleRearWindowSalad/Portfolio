import { User } from '../entities/User';

export class UserRepository {
  getAll() {
    return [User];
  }
}
