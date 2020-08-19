import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../Entities/user.entity';

@Injectable()
export class UserService {

  private salt: number = 10;

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async save(email: String, password: String): Promise<User | String> {

    const userAlreadyExisits: User = await this.userRepository.findOne({ where: { email } });

    if (userAlreadyExisits) {
      return "User already exists!";
    }

    const user: User = new User();
    user.email = email;
    user.firstAccess = true;

    const bcrypt = require('bcrypt');
    const hash = bcrypt.hashSync(password, this.salt);

    user.password = hash;

    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async findUserByAndPassword(email: string, password: string) {
    const user: any = await this.userRepository.findOne({ where: { email } });
    const bcrypt = require('bcrypt');

    const isPasswordMatching = bcrypt.compareSync(password, user.password);

    return isPasswordMatching ? user : null;
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
