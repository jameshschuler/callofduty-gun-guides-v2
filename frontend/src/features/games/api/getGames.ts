import { axios } from '@/lib/axios';
import { ApiResponse } from '@/shared/types';
import { useQuery } from '@tanstack/react-query';
import { GamesResponse } from '../types';

function getGames(): Promise<ApiResponse<GamesResponse>> {
  return axios.get(`/games`).then((res) => res.data);
}

export const useGames = () => {
  return useQuery({
    queryKey: ['games'],
    queryFn: () => getGames(),
  });
};
