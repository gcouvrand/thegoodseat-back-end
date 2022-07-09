import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { GetOffersDto } from 'src/dto/get-offers.dto';
import { headersRequest } from 'src/headers-request/headers-request';

@Injectable()
export class OffersService {
  constructor(private httpService: HttpService) {}

  getOffers(getOffersDto: GetOffersDto) {
    return this.httpService
      .post(
        'https://apistaging.thegoodseat.fr/getOffersByPartner',
        getOffersDto,
        { headers: headersRequest },
      )
      .pipe(map((response) => response.data));
  }
}
