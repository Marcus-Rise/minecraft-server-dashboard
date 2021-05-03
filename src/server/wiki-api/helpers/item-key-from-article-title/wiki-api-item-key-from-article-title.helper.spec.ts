import { WikiApiItemKeyFromArticleTitleHelper } from "./wiki-api-item-key-from-article-title.helper";

describe("WikiApiItemKeyFromArticleTitleHelper", () => {
  it("should return uppercase first letter with underscore", function () {
    expect(WikiApiItemKeyFromArticleTitleHelper("Enchanted_Golden_Apple")).toEqual("enchanted_golden_apple");
  });

  it("should return uppercase first letter with space", function () {
    expect(WikiApiItemKeyFromArticleTitleHelper("Enchanted Golden Apple")).toEqual("enchanted_golden_apple");
  });

  it("should return uppercase first letter capitalize", function () {
    expect(WikiApiItemKeyFromArticleTitleHelper("ENCHANTED GOLDEN APPLE")).toEqual("enchanted_golden_apple");
  });
});
