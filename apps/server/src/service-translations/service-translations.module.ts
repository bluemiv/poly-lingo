import { Module } from '@nestjs/common';
import { ServiceTranslationsService } from './service-translations.service';
import { ServiceTranslationsController } from './service-translations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceTranslation, ServiceTranslationSchema } from './entity/service-translation.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ServiceTranslation.name, schema: ServiceTranslationSchema },
    ]),
  ],
  providers: [ServiceTranslationsService],
  controllers: [ServiceTranslationsController],
})
export class ServiceTranslationsModule {}
