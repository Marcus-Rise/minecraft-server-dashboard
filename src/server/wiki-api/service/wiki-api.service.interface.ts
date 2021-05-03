import type { Item } from "../../../common";

interface IWikiApiService {
  parseItems(): Promise<Item[]>;
  parseItem(articleTitle: string): Promise<Item>;
}

export type { IWikiApiService };
