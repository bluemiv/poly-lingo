import { TQueryParams } from '@repo/core/types';

const serviceTranslationApi = {
  getServiceTranslations: (params?: TQueryParams) => ({
    url: '/service-translations/',
    params,
  }),
  getServiceTranslation: (serviceTranslationId: number) => ({
    url: `/service-translations/${serviceTranslationId}/`,
  }),
};

export default serviceTranslationApi;
