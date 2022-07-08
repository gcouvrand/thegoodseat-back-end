import { Body, Controller, Post } from '@nestjs/common';
import { SignInCredentialsDto } from 'src/dto/signin-credentials.dto';
import { SignUpCredentialsDto } from 'src/dto/signup-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() signUpCredentialsDto: SignUpCredentialsDto) {
    return await this.authService.signUp(signUpCredentialsDto);
  }

  @Post('/signin')
  async signIn(@Body() signInCredentialsDto: SignInCredentialsDto) {
    return await this.authService.signIn(signInCredentialsDto);
  }
}
