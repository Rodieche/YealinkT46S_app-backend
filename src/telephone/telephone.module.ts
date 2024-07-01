import { Module } from '@nestjs/common';
import { TelephoneController } from './telephone.controller';
import { TelephoneService } from './telephone.service';
import { MessagesWsGateway } from 'src/messages-ws/messages-ws.gateway';
import { MessagesWsService } from 'src/messages-ws/messages-ws.service';

@Module({
  controllers: [TelephoneController],
  providers: [TelephoneService, MessagesWsGateway, MessagesWsService]
})
export class TelephoneModule {}
