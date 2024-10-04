import { useQuery } from '@tanstack/react-query';
import apiCaller from '@/utils/apiCaller.ts';
import { TQueryParams } from '@repo/core/types';
import translationApi from '@/api/translationApi.ts';

const PREFIX = 'TRANSLATION';

export const TRANSLATIONS_QUERY_KEY = [PREFIX, 'TRANSLATIONS'];

export const useTranslationsQuery = (searchParams?: TQueryParams) =>
  useQuery({
    queryKey: [...TRANSLATIONS_QUERY_KEY, searchParams],
    queryFn: async () => {
      const { url, params } = translationApi.getServiceTranslations(searchParams);
      const { data } = await apiCaller.get(url, params);
      return data;
    },
  });

export const TRANSLATION_QUERY_KEY = [PREFIX, 'TRANSLATION'];

export const useTranslationQuery = (serviceTranslationId: number) =>
  useQuery({
    queryKey: [...TRANSLATION_QUERY_KEY, serviceTranslationId],
    queryFn: async () => {
      const { url } = translationApi.getServiceTranslation(serviceTranslationId);
      const { data } = await apiCaller.get(url);
      return data;
    },
    enabled: !!serviceTranslationId,
  });
