import { Body, Controller, Post } from '@nestjs/common';
import { GetOffersDto } from 'src/dto/get-offers.dto';
import { OffersService } from './offers.service';

@Controller('offers')
export class OffersController {
  constructor(private offersService: OffersService) {}

  @Post('/get-offers')
  async getOffers(@Body() getOffersDto: GetOffersDto) {
    return await this.offersService.getOffers(getOffersDto);
  }
}

  