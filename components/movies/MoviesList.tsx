import { getMovieList } from '@/helpers/movieServ';
import MovieItem from './MovieItem';
import classes from './MovieList.module.css';
import InfiniteScroll from './InfiniteScroll';

const MoviesList = async () => {
  const fetchResult = await getMovieList({
    currentPage: '1',
    itemsPerPage: '8',
  });

  if (fetchResult.isError) return null;
  const movieList = fetchResult.data.items;

  return (
    <div className={classes.movieList}>
      {movieList.map((movie) => (
        <MovieItem key={movie.maPhim} movieItem={movie} />
      ))}
      <InfiniteScroll />
    </div>
  );
};

export default MoviesList;
