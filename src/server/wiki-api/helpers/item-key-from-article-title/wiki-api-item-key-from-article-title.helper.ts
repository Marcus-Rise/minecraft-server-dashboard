const WikiApiItemKeyFromArticleTitleHelper = (articleTitle: string): string => {
  let words: string[];

  const wordsWithUnderscore = articleTitle.split("_");
  const wordsWithSpace = articleTitle.split(" ");

  if (wordsWithUnderscore.length > wordsWithSpace.length) {
    words = wordsWithUnderscore;
  } else {
    words = wordsWithSpace;
  }

  return words.join("_").toLowerCase();
};

export { WikiApiItemKeyFromArticleTitleHelper };
