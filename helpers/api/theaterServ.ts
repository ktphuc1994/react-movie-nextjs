import localConst from '@/constants/localConst';
import { handleServerFetchResult, serverFetch } from './apiRequest';
import { MovieScheduleResponse } from '@/types/theater';

const getScheduleByMovieId = async (movieId: string) => {
  const schedulePromise = serverFetch<MovieScheduleResponse>(
    localConst.BASE_THEATER_URL() + `/LayThongTinLichChieuPhim/${movieId}`
  ).then((res) => res.content);

  const result = await handleServerFetchResult(schedulePromise);
  return result;
};

export { getScheduleByMovieId };
