import { Injectable} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { Login, UserInfo, Register } from './user.type';
import { User } from './user.entity';
import * as Bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async addUser(register: Register): Promise<UserInfo>{
    const registerUser = await this.userRepository.create();

    const salt: string = await Bcrypt.genSalt(10);
    const password: string = await Bcrypt.hash(register.password, salt);

    registerUser.email = register.email;
    registerUser.password = password;

    const user = await this.userRepository.save(registerUser);
    const userInfo: UserInfo = {
      email: user.email,
    };
    return userInfo;
  }

  public async login(loginUser: Login): Promise<UserInfo>{
    const user: User = await this.userRepository.findOne({
      where: {
        email: loginUser.email,
      },
    });

    const passwordCheck = await Bcrypt.compare(loginUser.password, user.password);

    if (!passwordCheck) {
      return null;
    }

    await this.userRepository.save(user);

    const userInfo: UserInfo = {
      email: user.email,
    };

    return userInfo;
  }
}