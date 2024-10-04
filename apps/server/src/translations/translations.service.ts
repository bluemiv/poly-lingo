import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateTranslationDto } from './dto/update-translation.dto';
import { CreateTranslationDto } from './dto/create-translation.dto';
import { Translation } from './entity/translation.entity';

@Injectable()
export class TranslationsService {
  constructor(
    @InjectModel(Translation.name)
    private readonly translationModel: Model<Translation>,
  ) {}

  async create(createTranslationDto: CreateTranslationDto): Promise<Translation> {
    const newTranslation = new this.translationModel({
      ...createTranslationDto,
      version: 1,
      translations: [],
    });
    return newTranslation.save();
  }

  async findAll(): Promise<Translation[]> {
    return this.translationModel.find().exec();
  }

  async findOne(id: string): Promise<Translation> {
    const translation = this.translationModel.findById(id).exec();
    if (!translation) {
      throw new NotFoundException(`Not found translation with ID ${id}`);
    }
    return translation;
  }

  async update(id: string, updateTranslationDto: UpdateTranslationDto): Promise<Translation> {
    const updatedTranslation = this.translationModel
      .findByIdAndUpdate(id, updateTranslationDto, { new: true })
      .exec();
    if (!updatedTranslation) {
      throw new NotFoundException(`Not found translation with ID ${id}`);
    }
    return updatedTranslation;
  }

  async remove(id: string): Promise<Translation> {
    const deletedTranslation = this.translationModel.findByIdAndDelete(id).exec();
    if (!deletedTranslation) {
      throw new NotFoundException(`Not found translation with ID ${id}`);
    }
    return deletedTranslation;
  }
}
