import { PropsWithChildren } from 'react';
import classes from './layout.module.css';
import MovieDetailBreadcrumb from '@/components/movies/MovieDetailBreadcrumb';

type Props = PropsWithChildren & {
  params: { movieId: string };
};

const MovieDetailLayout = ({ children }: Props) => {
  return (
    <div className={`${classes.movieDetailLayout} main-container-wrapper`}>
      {children}
    </div>
  );
};

export default MovieDetailLayout;
