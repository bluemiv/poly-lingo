import { Test, TestingModule } from '@nestjs/testing';
import { ServiceTranslationsService } from './service-translations.service';
import { getModelToken } from '@nestjs/mongoose';
import { ServiceTranslation } from './entity/service-translation.entity';

const mockServiceTranslation = {
  _id: '123412SD12312',
  serviceName: 'my service',
  version: 1,
  translations: [
    {
      key: 'label_username',
      modifiedAt: '2024-09-29T15:00:00Z',
      ko: '사용자 이름',
      en: 'Username',
      idn: 'Nama pengguna',
      history: [],
    },
  ],
};

describe('ServiceTranslationsService', () => {
  let service: ServiceTranslationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ServiceTranslationsService,
        {
          provide: getModelToken(ServiceTranslation.name),
          useValue: function (dto) {
            return {
              find: jest.fn().mockResolvedValue([mockServiceTranslation]),
              findById: jest.fn().mockResolvedValue(mockServiceTranslation),
              findByIdAndUpdate: jest.fn().mockResolvedValue(mockServiceTranslation),
              findByIdAndRemove: jest.fn().mockResolvedValue(mockServiceTranslation),
              save: jest.fn().mockResolvedValue(dto),
            };
          },
        },
      ],
    }).compile();

    service = module.get<ServiceTranslationsService>(ServiceTranslationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('service translation을 생성할 수 있어야 한다.', async () => {
    const createdServiceTranslation = await service.create(mockServiceTranslation);
    expect(createdServiceTranslation).toEqual(mockServiceTranslation);
  });
});
