import { MovieType } from '@/types/movie';
import classes from './MovieItem.module.css';
import { StarFilled } from '@ant-design/icons';

type Props = {
  movieItem: MovieType;
};
const MovieItem = ({ movieItem }: Props) => {
  return (
    <div>
      <div className={classes.imageWrapper}>
        <img src={movieItem.hinhAnh} />
        {movieItem.danhGia ? (
          <div className={classes.movieRating}>
            <StarFilled />
            <span>{movieItem.danhGia}</span>
          </div>
        ) : null}
        {movieItem.hot ? <span className={classes.movieHot}>hot</span> : null}
      </div>
      <span className={classes.movieTitle}>{movieItem.tenPhim}</span>
    </div>
  );
};

export default MovieItem;
