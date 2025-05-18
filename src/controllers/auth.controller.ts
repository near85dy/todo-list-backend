import {
  Body,
  Controller,
  Header,
  Headers,
  Post,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/services/user.service';

@Controller('auth')
export class AuthController {
  private salt = '$2b$10$sF7mlvZy.Ym2NQHMFKhTAe';
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  @Post('signup')
  async signup(@Body() body: { username; password }, @Res() res) {
    const username = body.username;
    const password = body.password;
    if (!body.username && !body.password) return res.status(400).send();

    const hashedPassword = await bcrypt.hash(password, this.salt);
    const user = await this.userService.createUser({
      username,
      password: hashedPassword,
    });

    const jwtToken = await this.jwtService.signAsync({ id: user.id });

    return res.send(jwtToken);
  }

  @Post('login')
  async login(@Body() body: { username; password }, @Res() res) {
    const username = body.username;
    const password = body.password;
    const user = await this.userService.getUserByUsername(username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const jwtToken = await this.jwtService.signAsync({ id: user.id });

    return res.send(jwtToken);
  }
}
