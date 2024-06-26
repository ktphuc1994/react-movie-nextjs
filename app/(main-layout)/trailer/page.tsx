import { notFound } from 'next/navigation';
import classes from './page.module.css';
import { getYouTubeLink } from '@/helpers/common';
import YoutubeIframe from '@/components/common/YoutubeIframe';

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

  const youtubeLink = getYouTubeLink(trailerUrl, true);

  return (
    <div className={classes.movieTrailer}>
      <YoutubeIframe youtubeLink={youtubeLink} />
    </div>
  );
};

export default TrailerPage;
