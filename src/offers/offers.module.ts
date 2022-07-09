import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { OffersController } from './offers.controller';
import { OffersService } from './offers.service';

@Module({
  imports: [HttpModule],
  controllers: [OffersController],
  providers: [OffersService]
})
export class OffersModule {}
