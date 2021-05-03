import { WikiApiImageNameFromArticleTitleHelper } from "./wiki-api-image-name-from-article-title.helper";

describe("WikiApiImageNameFromArticleTitleHelper", () => {
  it("should return uppercase first letter with underscore", function () {
    expect(WikiApiImageNameFromArticleTitleHelper("enchanted_golden_apple")).toEqual("Enchanted_Golden_Apple");
  });

  it("should return uppercase first letter with space", function () {
    expect(WikiApiImageNameFromArticleTitleHelper("enchanted golden apple")).toEqual("Enchanted_Golden_Apple");
  });

  it("should return uppercase first letter capitalize", function () {
    expect(WikiApiImageNameFromArticleTitleHelper("ENCHANTED_GOLDEN_APPLE")).toEqual("Enchanted_Golden_Apple");
  });
});
