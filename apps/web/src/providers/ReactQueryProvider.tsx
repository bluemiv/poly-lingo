import { TPropsWithChildren } from '@repo/ui/types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 60 * 1000,
    },
  },
});

export default function ReactQueryProvider({ children }: TPropsWithChildren) {
  useEffect(() => {}, []);
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
