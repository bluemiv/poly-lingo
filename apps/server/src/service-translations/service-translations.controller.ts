import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ServiceTranslationsService } from './service-translations.service';
import { CreateServiceTranslationDto } from './dto/create-service-translation.dto';
import { UpdateServiceTranslationDto } from './dto/update-service-translation.dto';

@Controller('service-translations')
export class ServiceTranslationsController {
  constructor(private readonly serviceTranslationService: ServiceTranslationsService) {}

  @Post()
  create(@Body() createServiceTranslationDto: CreateServiceTranslationDto) {
    return this.serviceTranslationService.create(createServiceTranslationDto);
  }

  @Get()
  findAll() {
    return this.serviceTranslationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceTranslationService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateServiceTranslationDto: UpdateServiceTranslationDto,
  ) {
    return this.serviceTranslationService.update(id, updateServiceTranslationDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.serviceTranslationService.remove(id);
  }
}
