import { useMutation } from '@tanstack/react-query';
import apiCaller from '@/utils/apiCaller';
import { TTranslation } from '@/features/translations/type';
import translationApi from '@/api/translationApi';

export const useCreateTranslationMutation = () =>
  useMutation({
    mutationFn: async (postParams: { serviceName: string; description?: string }) => {
      const { url, params } = translationApi.createTranslation({
        serviceName: postParams.serviceName.trim(),
        description: postParams.description?.trim(),
      });
      const { data } = await apiCaller.post(url, params);
      return data as TTranslation;
    },
  });
