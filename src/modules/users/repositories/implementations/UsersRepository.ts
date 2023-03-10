import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const newUser = new User();
    Object.assign(newUser, {
      name,
      email,
      admin: false,
      created_at: new Date(),
      updated_at: new Date(),
    });
    this.users.push(newUser);
    return newUser;
  }

  findById(id: string): User | undefined {
    const searchUserByID = this.users.find((user) => user.id === id);
    return searchUserByID;
  }

  findByEmail(email: string): User | undefined {
    const searchUserByEmail = this.users.find((user) => user.email === email);
    return searchUserByEmail;
  }

  turnAdmin(receivedUser: User): User {
    const updateUser = receivedUser;
    updateUser.admin = true;
    updateUser.updated_at = new Date();

    return updateUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
