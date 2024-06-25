import MovieItem from './MovieItem';
import classes from './MovieList.module.css';
import InfiniteScroll from './InfiniteScroll';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/constants/commonConst';
import { getMovieList } from '@/helpers/api/movieServ';

const MoviesList = async () => {
  const fetchResult = await getMovieList({
    currentPage: DEFAULT_PAGE.toString(),
    itemsPerPage: DEFAULT_PAGE_SIZE.toString(),
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
