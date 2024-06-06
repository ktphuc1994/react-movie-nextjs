import localConst from '@/constants/localConst';
import { serverFetch } from './apiRequest';
import { serverErrorHandling } from './errorServ';
import { MovieBannerType } from '@/types/movie';

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

export { getMovieBanner };
