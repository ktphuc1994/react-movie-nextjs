import localConst from '@/constants/localConst';
import { handleServerFetchResult, serverFetch } from './apiRequest';
import { serverErrorHandling } from './errorServ';
import { MovieBannerType, MovieType, PaginationType } from '@/types/movie';
import { FetchWithContent } from '@/types/common';

const getMovieBanner = async () => {
  try {
    const res = await serverFetch(
      localConst.BASE_MOVIE_URL() + '/LayDanhSachBanner'
    );
    return {
      isError: false,
      data: res.content as MovieBannerType[],
    };
  } catch (error) {
    const message = await serverErrorHandling(error);
    return { isError: true, message };
  }
};

type GetMovieListParams = {
  tenPhim?: string;
  currentPage?: string;
  itemsPerPage?: string;
};
const getMovieList = async ({
  tenPhim = '',
  currentPage = '',
  itemsPerPage = '',
}: GetMovieListParams) => {
  const movieListPromise = serverFetch<
    FetchWithContent<PaginationType<MovieType[]>>
  >(
    localConst.BASE_MOVIE_URL() +
      `/LayDanhSachPhimPhanTrang?tenPhim=${tenPhim}&currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`
  ).then((res) => res.content);

  const result = await handleServerFetchResult(movieListPromise);
  return result;
};

export { getMovieBanner, getMovieList };
