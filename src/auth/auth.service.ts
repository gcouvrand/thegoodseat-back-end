import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { SignInCredentialsDto } from 'src/dto/signin-credentials.dto';
import { SignUpCredentialsDto } from 'src/dto/signup-credentials.dto';
import { headersRequest } from 'src/headers-request/headers-request';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {}

  signUp(signUpCredentialsDto: SignUpCredentialsDto): Observable<any> {
    return this.httpService
      .post(
        'https://apistaging.thegoodseat.fr/registeruser',
        signUpCredentialsDto,
        { headers: headersRequest },
      )
      .pipe(map((response) => response.data));
  }

  signIn(signInCredentialsDto: SignInCredentialsDto): Observable<any> {
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
