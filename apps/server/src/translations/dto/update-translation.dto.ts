export class UpdateTranslationDto {
  readonly serviceName?: string;
  readonly translations?: Record<string, any>[];
}
