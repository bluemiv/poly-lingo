import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TranslationsService } from './translations.service';
import { CreateTranslationDto } from './dto/create-translation.dto';
import { UpdateTranslationDto } from './dto/update-translation.dto';

@Controller('translations')
export class TranslationsController {
  constructor(private readonly translationService: TranslationsService) {}

  @Post()
  create(@Body() createServiceTranslationDto: CreateTranslationDto) {
    return this.translationService.create(createServiceTranslationDto);
  }

  @Get()
  findAll() {
    return this.translationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.translationService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateServiceTranslationDto: UpdateTranslationDto) {
    return this.translationService.update(id, updateServiceTranslationDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.translationService.remove(id);
  }
}
