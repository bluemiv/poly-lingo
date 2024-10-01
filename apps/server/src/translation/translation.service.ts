import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Translation } from './schemas/translation.schema';
import { Model } from 'mongoose';
import { CreateTranslationDto } from './dto/create-translation.dto';

@Injectable()
export class TranslationService {
  constructor(@InjectModel(Translation.name) private translationModel: Model<Translation>) {}

  async create(createTranslationDto: CreateTranslationDto): Promise<Translation> {
    const createdTranslation = new this.translationModel(createTranslationDto);
    return createdTranslation.save();
  }

  async findAll(): Promise<Translation[]> {
    return this.translationModel.find().exec();
  }
}
