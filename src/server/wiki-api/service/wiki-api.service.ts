import type { IWikiApiService } from "./wiki-api.service.interface";
import Wiki from "wikijs";
import { inject, injectable } from "inversify";
import type { IWikiApiConfig } from "../config";
import { WIKI_API_CONFIG } from "../config";
import {
  WikiApiImageNameFromArticleTitleHelper,
  WikiApiItemKeyFromArticleTitleHelper,
  WikiApiLangDetectHelper,
} from "../helpers";
import type { Item } from "../../../common";
import { LangEnum } from "../../../common";

@injectable()
class WikiApiService implements IWikiApiService {
  constructor(@inject(WIKI_API_CONFIG) private readonly config: IWikiApiConfig) {}

  async parseItems(): Promise<Item[]> {
    const { apiUrl } = this.config;

    const page = await Wiki({ apiUrl }).page("Category:Items");
    const items = await page.links();

    return (items as unknown) as Item[];
  }

  async parseItem(articleTitle: string): Promise<Item | null> {
    const lang = WikiApiLangDetectHelper(articleTitle);
    let apiUrl: string = this.config.apiUrl;

    if (lang === LangEnum.ru) {
      apiUrl = apiUrl.replace("/api", "/ru/api");
    }

    return Wiki({ apiUrl })
      .page(articleTitle)
      .then(async (page) => {
        const images = await page.images();
        let imageName: string;

        if (lang === LangEnum.ru) {
          imageName = encodeURI(WikiApiImageNameFromArticleTitleHelper(articleTitle));
        } else {
          imageName = WikiApiImageNameFromArticleTitleHelper(articleTitle);
        }

        const image = images.filter((i) => i.includes(imageName))[0];
        const description = await page.summary();
        const link = await page.url();

        return {
          key: WikiApiItemKeyFromArticleTitleHelper(articleTitle),
          description,
          image,
          link,
        };
      })
      .catch((e) => {
        console.error(e);

        return null;
      });
  }
}

export { WikiApiService };
