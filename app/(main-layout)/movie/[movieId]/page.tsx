type Props = {
  params: { movieId: string };
};

const MovieDetail = ({ params }: Props) => {
  const movieId = params.movieId;

  return <div>MovieDetail ID: {movieId}</div>;
};

export default MovieDetail;
