export class CreateTranslationDto {
  readonly serviceName: string;
  readonly version: number;
  readonly translations: Record<string, any>[];
}
