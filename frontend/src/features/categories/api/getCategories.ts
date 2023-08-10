import { axios } from '@/lib/axios';
import { ApiResponse } from '@/shared/types';
import { useQuery } from '@tanstack/react-query';
import { CategoriesResponse } from '../types';

function getCategories(gameName?: string): Promise<ApiResponse<CategoriesResponse>> {
  return axios.get(`/games/${gameName}/categories`).then((res) => res.data);
}

interface UseCategoriesOptions {
  gameName?: string;
}

export const useCategories = ({ gameName }: UseCategoriesOptions) => {
  return useQuery({
    queryKey: [`categories_${gameName}`],
    queryFn: () => getCategories(gameName),
  });
};
