import ModalBackDrop from '@/components/common/ModalBackDrop';
import { getYouTubeLink } from '@/helpers/common';
import classes from './page.module.css';

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
          <iframe
            className={classes.trailerIframe}
            width='100%'
            height='100%'
            src={getYouTubeLink(trailerUrl, true)}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        ) : (
          <div>Not found</div>
        )}
      </div>
    </>
  );
};

export default TrailerModal;
