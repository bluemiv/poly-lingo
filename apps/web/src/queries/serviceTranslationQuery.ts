import { useQuery } from '@tanstack/react-query';
import apiCaller from '@/utils/apiCaller.ts';
import { TQueryParams } from '@repo/core/types';
import serviceTranslationApi from '@/api/serviceTranslationApi.ts';

const PREFIX = 'SERVICE_TRANSLATION';

export const SERVICE_TRANSLATIONS_QUERY_KEY = [PREFIX, 'SERVICE_TRANSLATIONS'];

export const useServiceTranslationsQuery = (searchParams?: TQueryParams) =>
  useQuery({
    queryKey: [...SERVICE_TRANSLATIONS_QUERY_KEY, searchParams],
    queryFn: async () => {
      const { url, params } = serviceTranslationApi.getServiceTranslations(searchParams);
      const { data } = await apiCaller.get(url, params);
      return data;
    },
  });

export const SERVICE_TRANSLATION_QUERY_KEY = [PREFIX, 'SERVICE_TRANSLATIONS'];

export const useServiceTranslationQuery = (serviceTranslationId: number) =>
  useQuery({
    queryKey: [...SERVICE_TRANSLATION_QUERY_KEY, serviceTranslationId],
    queryFn: async () => {
      const { url } = serviceTranslationApi.getServiceTranslation(serviceTranslationId);
      const { data } = await apiCaller.get(url);
      return data;
    },
    enabled: !!serviceTranslationId,
  });
