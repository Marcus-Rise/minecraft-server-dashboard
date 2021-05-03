import { WikiApiLangDetectHelper } from "./wiki-api-lang-detect.helper";
import { LangEnum } from "../../../../common";

describe("WikiApiLangDetectHelper", () => {
  it("should to be ru query", () => {
    expect(WikiApiLangDetectHelper("фцвфцв")).toEqual(LangEnum.ru);
  });

  it("should to be en query", () => {
    expect(WikiApiLangDetectHelper("awdsfsef")).toEqual(LangEnum.en);
  });
});
