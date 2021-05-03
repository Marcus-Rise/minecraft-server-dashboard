import type { Item } from "../../../common";

interface IWikiApiService {
  parseItems(): Promise<Item[]>;
  parseItem(articleTitle: string): Promise<Item | null>;
}

export type { IWikiApiService };
