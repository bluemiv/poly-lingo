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
  getTranslation: (translationId: string) => ({
    url: `/api/v1/translations/${translationId}/`,
  }),
};

export default translationApi;
