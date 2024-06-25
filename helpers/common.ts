const getStringPosition = (searchString: string[], paragraph: string) => {
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

const slugify = (text: string) => {
  return text
    .normalize('NFKD') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-'); // remove consecutive hyphens
};

export { getYouTubeLink, getStringPosition, slugify };
