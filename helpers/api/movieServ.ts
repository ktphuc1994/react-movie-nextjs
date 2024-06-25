import localConst from '@/constants/localConst';
import { handleServerFetchResult, serverFetch } from './apiRequest';
import { serverErrorHandling } from './errorServ';
import { MovieBannerType, MovieType, PaginationType } from '@/types/movie';

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
  const movieListPromise = serverFetch<PaginationType<MovieType[]>>(
    localConst.BASE_MOVIE_URL() +
      `/LayDanhSachPhimPhanTrang?tenPhim=${tenPhim}&currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`
  ).then((res) => res.content);

  const result = await handleServerFetchResult(movieListPromise);
  return result;
};

const getMovieDetail = async (movieId: string) => {
  const movieDetailPromise = serverFetch<MovieType>(
    localConst.BASE_MOVIE_URL() + `/LayThongTinPhim/${movieId}`
  ).then((res) => res.content);

  const result = await handleServerFetchResult(movieDetailPromise);
  return result;
};

export { getMovieBanner, getMovieList, getMovieDetail };
