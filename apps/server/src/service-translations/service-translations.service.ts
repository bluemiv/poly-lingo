import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ServiceTranslation } from './entity/service-translation.entity';
import { UpdateServiceTranslationDto } from './dto/update-service-translation.dto';
import { CreateServiceTranslationDto } from './dto/create-service-translation.dto';

@Injectable()
export class ServiceTranslationsService {
  constructor(
    @InjectModel(ServiceTranslation.name)
    private readonly serviceTranslationModel: Model<ServiceTranslation>,
  ) {}

  async create(
    createServiceTranslationDto: CreateServiceTranslationDto,
  ): Promise<ServiceTranslation> {
    const newServiceTranslation = new this.serviceTranslationModel(createServiceTranslationDto);
    return newServiceTranslation.save();
  }

  async findAll(): Promise<ServiceTranslation[]> {
    return this.serviceTranslationModel.find().exec();
  }

  async findOne(id: string): Promise<ServiceTranslation> {
    const serviceTranslation = this.serviceTranslationModel.findById(id).exec();
    if (!serviceTranslation) {
      throw new NotFoundException(`Not found serviceTranslation with ID ${id}`);
    }
    return serviceTranslation;
  }

  async update(
    id: string,
    updateServiceTranslationDto: UpdateServiceTranslationDto,
  ): Promise<ServiceTranslation> {
    const updatedServiceTranslation = this.serviceTranslationModel
      .findByIdAndUpdate(id, updateServiceTranslationDto, { new: true })
      .exec();
    if (!updatedServiceTranslation) {
      throw new NotFoundException(`Not found serviceTranslation with ID ${id}`);
    }
    return updatedServiceTranslation;
  }

  async remove(id: string): Promise<ServiceTranslation> {
    const deletedServiceTranslation = this.serviceTranslationModel.findByIdAndDelete(id).exec();
    if (!deletedServiceTranslation) {
      throw new NotFoundException(`Not found serviceTranslation with ID ${id}`);
    }
    return deletedServiceTranslation;
  }
}
