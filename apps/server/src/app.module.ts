import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TranslationsModule } from './translations/translations.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const username = configService.get<string>('MONGODB_USERNAME');
        const password = configService.get<string>('MONGODB_PASSWORD');
        const host = configService.get<string>('MONGODB_HOST');
        const port = configService.get<string>('MONGODB_PORT');
        const database = configService.get<string>('MONGODB_DATABASE');

        const uri = `mongodb://${username}:${password}@${host}:${port}/${database}`;

        return {
          uri,
        };
      },
    }),
    TranslationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
