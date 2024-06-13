type Props = {
  params: { movieId: string };
};

const BookingPage = ({ params }: Props) => {
  const movieId = params.movieId;
  return <div>BookingPage: {movieId}</div>;
};

export default BookingPage;
