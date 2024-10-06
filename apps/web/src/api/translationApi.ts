import { TApiQueryParams } from '@repo/core/types';

const translationApi = {
  createTranslation: (params: { serviceName: string; description?: string }) => ({
    url: '/api/v1/translations/',
    params,
  }),
  getTranslations: (params?: TApiQueryParams) => ({
    url: '/api/v1/translations/',
    params,
  }),
  getTranslation: (serviceTranslationId: number) => ({
    url: `/api/v1/translations/${serviceTranslationId}/`,
  }),
};

export default translationApi;
