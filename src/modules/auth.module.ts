import { Module } from '@nestjs/common';
import { AuthController } from 'src/controllers/auth.controller';
import { UserModule } from './user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/stretegyes/jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [JwtStrategy],
  imports: [
    UserModule,
    JwtModule.register({ secret: '1488', signOptions: { expiresIn: '24h' } }),
  ],
})
export class AuthModule {}
