import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findUserByScreenName(screenName: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { screenName } });
    console.log(!!user);
    return !!user;
  }

  async register(userData: Partial<User>): Promise<void> {
    if (await this.findUserByScreenName(userData.screenName)) {
      return Promise.reject(new Error('User is already taken.'));
    }
    await this.userRepository.insert(userData);
    return;
  }

  async loginUser(screenName: string, password: string) {
    return await this.userRepository.findOne({
      where: {
        screenName,
        password,
      },
    });
  }
}
