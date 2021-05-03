import { LangEnum } from "../../../../common";

const WikiApiLangDetectHelper = (query: string): LangEnum => {
  const ruRegex = /[а-яА-Я]/;
  // const enRegex = /[a-zA-Z]/;
  const testRu = query.match(ruRegex);
  // const testEn = query.match(enRegex);

  return !!testRu?.length ? LangEnum.ru : LangEnum.en;
};

export { WikiApiLangDetectHelper };
