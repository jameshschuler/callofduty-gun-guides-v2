import { axios } from '@/lib/axios';
import { ApiResponse } from '@/shared/types';
import { useQuery } from '@tanstack/react-query';
import { GuidesResponse } from '../types';

function getGuides(categoryName?: string, gameName?: string): Promise<ApiResponse<GuidesResponse>> {
  return axios.get(`/games/${gameName}/categories/${categoryName}/guides`).then((res) => res.data);
}

interface UseGuidesOptions {
  gameName?: string;
  categoryName?: string;
}

export const useGuides = ({ categoryName, gameName }: UseGuidesOptions) => {
  return useQuery({
    queryKey: [`guides_${gameName}_${categoryName}`],
    queryFn: () => getGuides(categoryName, gameName),
  });
};
