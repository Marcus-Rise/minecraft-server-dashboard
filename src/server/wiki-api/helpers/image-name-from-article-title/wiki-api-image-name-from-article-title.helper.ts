const WikiApiImageNameFromArticleTitleHelper = (articleTitle: string): string => {
  let words: string[];

  const wordsWithUnderscore = articleTitle.split("_");
  const wordsWithSpace = articleTitle.split(" ");

  if (wordsWithUnderscore.length > wordsWithSpace.length) {
    words = wordsWithUnderscore;
  } else {
    words = wordsWithSpace;
  }

  const wordsUpperCase = words.map((i) => {
    const firstLetter = i.slice(0, 1).toUpperCase();

    return firstLetter + i.slice(1).toLowerCase();
  });

  return wordsUpperCase.join("_");
};

export { WikiApiImageNameFromArticleTitleHelper };
