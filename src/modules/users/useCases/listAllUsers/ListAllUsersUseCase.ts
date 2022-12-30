import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const findUser = this.usersRepository.findById(user_id);
    if (!findUser) {
      throw new Error("User not exists");
    }
    if (!findUser.admin === true) {
      throw new Error("User not ADMIN");
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
