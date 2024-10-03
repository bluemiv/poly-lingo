export class CreateServiceTranslationDto {
  readonly serviceName: string;
  readonly version: number;
  readonly translations: Record<string, any>[];
}
