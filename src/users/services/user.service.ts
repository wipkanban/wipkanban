import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../Entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  save(post: User): Promise<User> {
    return this.userRepository.save(post);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async findUserByAndPassword(username: string, password: string) {
    const user:any = await this.userRepository.findOne({ where: { email:username } });
    const bcrypt = require('bcrypt');
        
    const isPasswordMatching = bcrypt.compareSync(password, user.password);

    return isPasswordMatching ? user : null;
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
