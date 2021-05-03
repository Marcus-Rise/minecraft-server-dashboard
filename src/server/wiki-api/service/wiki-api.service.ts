import type { IWikiApiService } from "./wiki-api.service.interface";
import wiki from "wikijs";
import { inject, injectable } from "inversify";
import type { IWikiApiConfig } from "../config";
import { WIKI_API_CONFIG } from "../config";
import { WikiApiImageNameFromArticleTitleHelper, WikiApiItemKeyFromArticleTitleHelper } from "../helpers";
import type { Item } from "../../../common";

@injectable()
class WikiApiService implements IWikiApiService {
  constructor(@inject(WIKI_API_CONFIG) private readonly config: IWikiApiConfig) {}

  async parseItems(): Promise<Item[]> {
    return [];
  }

  async parseItem(articleTitle: string): Promise<Item> {
    const { apiUrl } = this.config;

    const page = await wiki({ apiUrl }).page(articleTitle);
    const images = await page.images();
    const imageName = WikiApiImageNameFromArticleTitleHelper(articleTitle);
    const image = images.filter((i) => i.includes(imageName))[0];
    const description = await page.summary();

    return {
      key: WikiApiItemKeyFromArticleTitleHelper(articleTitle),
      description,
      image,
    };
  }
}

export { WikiApiService };
