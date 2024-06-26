import {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from 'antd/es/breadcrumb/Breadcrumb';
import { HomeOutlined } from '@ant-design/icons';
import CommonBreadcrumb from '@/components/common/CommonBreadcrumb';
import { getMovieDetail } from '@/helpers/api/movieServ';
import classes from './page.module.css';
import Link from 'next/link';
import { getYouTubeLink, slugify } from '@/helpers/common';
import YoutubeIframe from '@/components/common/YoutubeIframe';
import MovieDetailContent from '@/components/movies/MovieDetailContent';

type Props = {
  params: { movieId: string };
};

const MovieDetail = async ({ params }: Props) => {
  const movieId = params.movieId.split('-').pop() ?? '';

  const movieResponse = await getMovieDetail(movieId);

  if (movieResponse.isError) return null;

  const movieInfo = movieResponse.data;

  const slugifiedUrl = slugify(movieInfo.tenPhim) + '-' + movieInfo.maPhim;

  const breadcrumbItems: Partial<
    BreadcrumbItemType & BreadcrumbSeparatorType
  >[] = [
    {
      path: '1',
      href: '/',
      title: <HomeOutlined />,
    },
    {
      path: '2',
      title: movieInfo.tenPhim,
    },
  ];

  return (
    <div>
      <section className='movie-detail-breadcrumb'>
        <CommonBreadcrumb items={breadcrumbItems} />
      </section>
      <section className={classes.movieDetailTitle}>
        <h1>{movieInfo.tenPhim}</h1>
        <Link href={`/movie/${slugifiedUrl}/booking`}>BOOK TICKET</Link>
      </section>
      <section className={classes.movieVideoFrame}>
        <YoutubeIframe youtubeLink={getYouTubeLink(movieInfo.trailer, true)} />
      </section>
      <MovieDetailContent movieInfo={movieInfo} />
    </div>
  );
};

export default MovieDetail;
