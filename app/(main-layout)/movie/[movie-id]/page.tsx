type Props = {
  params: { 'movie-id': string };
};

const MovieDetail = ({ params }: Props) => {
  const movieId = params['movie-id'];

  return <div>MovieDetail ID: {movieId}</div>;
};

export default MovieDetail;
