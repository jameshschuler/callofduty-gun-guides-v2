import { DefaultOptions, QueryClient } from '@tanstack/react-query';

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    suspense: true,
    retry: 2,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
