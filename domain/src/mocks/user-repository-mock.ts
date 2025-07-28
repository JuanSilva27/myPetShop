import { User } from "../entities/User";
import { UsersRepository } from "../repositories/user-repository";

export interface MockedUsersRepository extends UsersRepository {
 users: User[];
}

export function mockUserRepositry(users: User[] = [ ]): MockedUsersRepository {
 return {
   users,
    findByEmail: async (email: string): Promise<User | null> => {
      const user = users.find(user => user.email === email);
      return user || null;
    }
 };
}