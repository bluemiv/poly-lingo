import { TApiQueryParams } from '@repo/core/types';

const translationApi = {
  getServiceTranslations: (params?: TApiQueryParams) => ({
    url: '/api/v1/translations/',
    params,
  }),
  getServiceTranslation: (serviceTranslationId: number) => ({
    url: `/api/v1/translations/${serviceTranslationId}/`,
  }),
};

export default translationApi;
