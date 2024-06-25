import { getScheduleByMovieId } from '@/helpers/api/theaterServ';
import {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
} from 'antd/es/breadcrumb/Breadcrumb';
import { HomeOutlined } from '@ant-design/icons';
import { slugify } from '@/helpers/common';
import CommonBreadcrumb from '@/components/common/CommonBreadcrumb';

type Props = {
  params: { movieId: string };
};

const BookingPage = async ({ params }: Props) => {
  const movieId = params.movieId.split('-').pop() ?? '';

  const movieDetail = await getScheduleByMovieId(movieId);
  if (movieDetail.isError) return null;

  const slugifiedUrl =
    slugify(movieDetail.data.tenPhim) + '-' + movieDetail.data.maPhim;

  const breadcrumbItems: Partial<
    BreadcrumbItemType & BreadcrumbSeparatorType
  >[] = [
    {
      href: '/',
      title: <HomeOutlined />,
    },
    {
      href: `/movie/${slugifiedUrl}`,
      title: movieDetail.data.tenPhim,
    },
    {
      title: 'Booking',
    },
  ];

  return (
    <div>
      <section className='movie-detail-breadcrumb'>
        <CommonBreadcrumb items={breadcrumbItems} />
      </section>
      <p>BookingPage: {movieId}</p>
    </div>
  );
};

export default BookingPage;
