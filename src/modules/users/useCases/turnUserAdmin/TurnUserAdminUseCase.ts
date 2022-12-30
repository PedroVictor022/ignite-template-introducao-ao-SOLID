import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const findUserTurnADMIN = this.usersRepository.findById(user_id);
    findUserTurnADMIN.admin = true;
    return findUserTurnADMIN;
  }
}

export { TurnUserAdminUseCase };
