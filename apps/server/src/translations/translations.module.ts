import { Module } from '@nestjs/common';
import { TranslationsService } from './translations.service';
import { TranslationsController } from './translations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Translation, TranslationSchema } from './entity/translation.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Translation.name, schema: TranslationSchema }])],
  providers: [TranslationsService],
  controllers: [TranslationsController],
})
export class TranslationsModule {}
