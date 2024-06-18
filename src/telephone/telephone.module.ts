import { Module } from '@nestjs/common';
import { TelephoneController } from './telephone.controller';
import { TelephoneService } from './telephone.service';

@Module({
  controllers: [TelephoneController],
  providers: [TelephoneService]
})
export class TelephoneModule {}
