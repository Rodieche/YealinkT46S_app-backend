import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelephoneModule } from './telephone/telephone.module';
import { ConfigModule } from '@nestjs/config';
import { MessagesWsModule } from './messages-ws/messages-ws.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TelephoneModule,
    MessagesWsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
