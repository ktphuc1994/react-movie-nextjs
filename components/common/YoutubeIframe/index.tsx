type Props = {
  youtubeLink?: string;
};

const YoutubeIframe = ({ youtubeLink }: Props) => {
  return (
    <iframe
      style={{ border: 'none' }}
      width='100%'
      height='100%'
      src={youtubeLink}
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
  );
};

export default YoutubeIframe;
