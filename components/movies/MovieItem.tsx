import { MovieType } from '@/types/movie';
import classes from './MovieItem.module.css';
import { StarFilled } from '@ant-design/icons';
import Button from 'antd/es/button';
import { PlayCircleFilled, BarcodeOutlined } from '@ant-design/icons';
import Link from 'next/link';

type Props = {
  movieItem: MovieType;
};
const MovieItem = ({ movieItem }: Props) => {
  const movieDetailUrl = `/movie/${movieItem.maPhim}`;

  return (
    <div>
      <div className={classes.imageWrapper}>
        <img src={movieItem.hinhAnh} />
        <Link href={movieDetailUrl} className={classes.imageOverlay}></Link>
        <div className={classes.movieLinks}>
          <Link href={`/movie/${movieItem.maPhim}/booking`}>
            <Button icon={<BarcodeOutlined />} type='primary' size='large'>
              Book Tickets
            </Button>
          </Link>
          <Link href={`/trailer?url=${movieItem.trailer}`} scroll={false}>
            <Button icon={<PlayCircleFilled />} size='large'>
              Trailer
            </Button>
          </Link>
        </div>
        {movieItem.danhGia ? (
          <div className={classes.movieRating}>
            <StarFilled />
            <span>{movieItem.danhGia}</span>
          </div>
        ) : null}
        {movieItem.hot ? <span className={classes.movieHot}>hot</span> : null}
      </div>
      <Link href={movieDetailUrl} className={classes.movieTitle}>
        {movieItem.tenPhim}
      </Link>
    </div>
  );
};

export default MovieItem;
