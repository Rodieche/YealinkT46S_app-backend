import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelephoneModule } from './telephone/telephone.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TelephoneModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
