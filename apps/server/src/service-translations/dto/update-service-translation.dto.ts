export class UpdateServiceTranslationDto {
  readonly serviceName?: string;
  readonly translations?: Record<string, any>[];
}
