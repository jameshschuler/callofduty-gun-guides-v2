import { axios } from '@/lib/axios';
import { ApiResponse } from '@/shared/types';
import { useQuery } from '@tanstack/react-query';
import { GuideDetailsResponse } from '../types';

function getGuideDetails(
  categoryName?: string,
  gameName?: string,
  guideName?: string
): Promise<ApiResponse<GuideDetailsResponse>> {
  return axios
    .get(`/games/${gameName}/categories/${categoryName}/guides/${guideName}`)
    .then((res) => res.data);
}

interface UseGuideDetailsOptions {
  gameName?: string;
  categoryName?: string;
  guideName?: string;
}

export const useGuideDetails = ({ categoryName, gameName, guideName }: UseGuideDetailsOptions) => {
  return useQuery({
    queryKey: [`guides_${gameName}_${categoryName}_${guideName}`],
    queryFn: () => getGuideDetails(categoryName, gameName, guideName),
  });
};
