import { TQueryParams } from '@repo/core/types';

const translationApi = {
  getServiceTranslations: (params?: TQueryParams) => ({
    url: '/service-translations/',
    params,
  }),
  getServiceTranslation: (serviceTranslationId: number) => ({
    url: `/service-translations/${serviceTranslationId}/`,
  }),
};

export default translationApi;
