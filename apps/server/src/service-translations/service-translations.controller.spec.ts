import { Test, TestingModule } from '@nestjs/testing';
import { ServiceTranslationsController } from './service-translations.controller';

describe('ServiceTranslationsController', () => {
  let controller: ServiceTranslationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceTranslationsController],
    }).compile();

    controller = module.get<ServiceTranslationsController>(ServiceTranslationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
