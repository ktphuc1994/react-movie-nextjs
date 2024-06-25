import {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from 'antd/es/breadcrumb/Breadcrumb';
import { HomeOutlined } from '@ant-design/icons';
import CommonBreadcrumb from '@/components/common/CommonBreadcrumb';
import { getMovieDetail } from '@/helpers/api/movieServ';

type Props = {
  params: { movieId: string };
};

const MovieDetail = async ({ params }: Props) => {
  const movieId = params.movieId.split('-').pop() ?? '';

  const movieDetail = await getMovieDetail(movieId);

  if (movieDetail.isError) return null;

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
      title: movieDetail.data.tenPhim,
    },
  ];

  return (
    <div>
      <section className='movie-detail-breadcrumb'>
        <CommonBreadcrumb items={breadcrumbItems} />
      </section>
      {movieDetail.data.moTa}
    </div>
  );
};

export default MovieDetail;
