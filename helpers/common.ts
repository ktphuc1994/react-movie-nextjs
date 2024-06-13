export const getStringPosition = (
  searchString: string[],
  paragraph: string
) => {
  for (const searchTerm of searchString) {
    const indexOfFirst = paragraph.indexOf(searchTerm);
    if (indexOfFirst !== -1) return indexOfFirst + searchTerm.length;
  }
  return 0;
};

const getYouTubeLink = (shortenLink: string, isAutoPlay?: boolean) => {
  const embedIndex = shortenLink.indexOf('youtube.com/embed');
  if (embedIndex !== -1) {
    return shortenLink;
  }

  const youTubeIndex: number = getStringPosition(
    ['youtu.be/', 'youtube.com/watch?v='],
    shortenLink
  );
  return `https://www.youtube.com/embed/${shortenLink.slice(youTubeIndex)}`;
};

export { getYouTubeLink };
