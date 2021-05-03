import type { IWikiApiConfig } from "./wiki-api.config.interface";
import { injectable } from "inversify";

@injectable()
class WikiApiConfig implements IWikiApiConfig {
  readonly apiUrl: string = process.env.WIKI_API_URL ?? "";
}

export { WikiApiConfig };
