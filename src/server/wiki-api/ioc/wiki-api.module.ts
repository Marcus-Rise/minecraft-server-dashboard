import { ContainerModule } from "inversify";
import type { IWikiApiConfig } from "../config";
import { WIKI_API_CONFIG, WikiApiConfig } from "../config";
import type { IWikiApiService } from "../service";
import { WIKI_API_SERVICE, WikiApiService } from "../service";

const WikiApiModule = new ContainerModule((bind) => {
  bind<IWikiApiConfig>(WIKI_API_CONFIG).to(WikiApiConfig).inSingletonScope();
  bind<IWikiApiService>(WIKI_API_SERVICE).to(WikiApiService).inSingletonScope();
});

export { WikiApiModule };
