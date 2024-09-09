import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: bcrypt.hashSync('changeme', 10), // Example of hashed password
    },
    {
      userId: 2,
      username: 'maria',
      password: bcrypt.hashSync('guess', 10), // Example of hashed password
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async createUser(username: string, password: string): Promise<User> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    const newUser = {
      userId: this.users.length + 1,
      username,
      password: hashedPassword,
    };
    
    this.users.push(newUser);
    return newUser;
  }
}
