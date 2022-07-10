import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { GetOffersDto } from 'src/dto/get-offers.dto';

@Injectable()
export class OffersService {
  constructor(private httpService: HttpService) {}

  getOffers(getOffersDto: GetOffersDto) {
    const headersRequestWithToken = {
      accept: 'application/json',
      aggregatorCode: 'poc-tgs',
      'x-api-key': 'wkcrqtCH1L7DHUDTyg35R47PLUnBBx9B4nsgJEgw',
      'Content-Type': 'application/json',
      Authorization: getOffersDto.token
    }
    return this.httpService
      .post(
        'https://apistaging.thegoodseat.fr/getOffersByPartner',
        getOffersDto,
        { headers: headersRequestWithToken },
      )
      .pipe(map((response) => response.data));
  }
}
