import ModalBackDrop from '@/components/common/ModalBackDrop';
import { getYouTubeLink } from '@/helpers/common';
import classes from './page.module.css';
import YoutubeIframe from '@/components/common/YoutubeIframe';

type Props = {
  searchParams: {
    url?: string;
  };
};

const TrailerModal = ({ searchParams }: Props) => {
  const trailerUrl = searchParams.url;

  return (
    <>
      <ModalBackDrop />
      <div className={classes.trailerModal}>
        {trailerUrl ? (
          <YoutubeIframe youtubeLink={getYouTubeLink(trailerUrl, true)} />
        ) : (
          <div>Not found</div>
        )}
      </div>
    </>
  );
};

export default TrailerModal;
