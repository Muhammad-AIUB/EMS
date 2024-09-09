import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string; userId: number; hashedPassword: string }> {
    const user = await this.usersService.findOne(username);
    if (!user || !(await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.userId, username: user.username };
    const accessToken = await this.jwtService.signAsync(payload);

    // Return the access token along with user information
    return {
      access_token: accessToken,
      userId: user.userId,
      hashedPassword: user.password, // Return the hashed password
    };
  }
}
