import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTranslationDto {
  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  code: string;
}
