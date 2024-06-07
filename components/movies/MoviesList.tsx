import { getMovieList } from '@/helpers/movieServ';
import MovieItem from './MovieItem';
import classes from './MovieList.module.css';

const MoviesList = async () => {
  const fetchResult = await getMovieList({
    currentPage: '1',
    itemsPerPage: '5',
  });

  if (fetchResult.isError) return null;
  const movieList = fetchResult.data.items;

  return (
    <div className={classes.movieList}>
      {movieList.map((movie) => (
        <MovieItem key={movie.maPhim} movieItem={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
