import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { SignInCredentialsDto } from 'src/dto/signin-credentials.dto';
import { SignUpCredentialsDto } from 'src/dto/signup-credentials.dto';
import { headersRequest } from 'src/headers-request/headers-request';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {}

  signUp(signUpCredentialsDto: SignUpCredentialsDto) {
    return this.httpService
      .post(
        'https://apistaging.thegoodseat.fr/registeruser',
        signUpCredentialsDto,
        { headers: headersRequest },
      )
      .subscribe({
        complete: () => {
          console.log('completed');
        },
        error: (err) => {},
      });
  }

  signIn(signInCredentialsDto: SignInCredentialsDto) {
    return this.httpService
      .post(
        'https://apistaging.thegoodseat.fr/loginuser',
        signInCredentialsDto,
        {
          headers: headersRequest,
        },
      )
      .pipe(map((response) => response.data));
  }
}
