import { getMovieBanner } from '@/helpers/movieServ';
import MainCarousel from './MainCarousel';

const MainBanner = async () => {
  const response = await getMovieBanner();

  if (response.isError) {
    return (
      <div>
        <p>{response.message}</p>
      </div>
    );
  }

  return <MainCarousel bannerList={response.data} />;
};

export default MainBanner;
