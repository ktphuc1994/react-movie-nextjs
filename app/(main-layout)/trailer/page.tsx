import { notFound } from 'next/navigation';
import classes from './page.module.css';
import { getYouTubeLink } from '@/helpers/common';

type Props = {
  searchParams: {
    url?: string;
  };
};

const TrailerPage = ({ searchParams }: Props) => {
  const trailerUrl = searchParams.url;

  if (!trailerUrl) {
    notFound();
  }

  return (
    <div className={classes.movieTrailer}>
      <iframe
        className={classes.trailerIframe}
        width='100%'
        height='100%'
        src={getYouTubeLink(trailerUrl, true)}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  );
};

export default TrailerPage;
