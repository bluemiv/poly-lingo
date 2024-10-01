import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TranslationModule } from './translation/translation.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TranslationModule, MongooseModule.forRoot('mongodb://root:1234@localhost:27017')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
