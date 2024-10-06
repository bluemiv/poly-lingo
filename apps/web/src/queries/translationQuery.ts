import { useQuery } from '@tanstack/react-query';
import apiCaller from '@/utils/apiCaller';
import { TApiQueryParams, TApiResponse } from '@repo/core/types';
import translationApi from '@/api/translationApi';
import { TTranslation } from '@/features/translations/type';

const PREFIX = 'TRANSLATION';

export const TRANSLATIONS_QUERY_KEY = [PREFIX, 'TRANSLATIONS'];

export const useTranslationsQuery = (searchParams?: TApiQueryParams) =>
  useQuery({
    queryKey: [...TRANSLATIONS_QUERY_KEY, searchParams],
    queryFn: async () => {
      const { url, params } = translationApi.getTranslations(searchParams);
      const { data } = await apiCaller.get(url, params);
      return data as TApiResponse<TTranslation>;
    },
  });

export const TRANSLATION_QUERY_KEY = [PREFIX, 'TRANSLATION'];

export const useTranslationQuery = (serviceTranslationId: number) =>
  useQuery({
    queryKey: [...TRANSLATION_QUERY_KEY, serviceTranslationId],
    queryFn: async () => {
      const { url } = translationApi.getTranslation(serviceTranslationId);
      const { data } = await apiCaller.get(url);
      return data;
    },
    enabled: !!serviceTranslationId,
  });
