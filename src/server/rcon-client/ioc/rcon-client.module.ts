import { ContainerModule } from "inversify";
import type { IRconClientConfig } from "../config";
import { RCON_CLIENT_CONFIG, RconClientConfig } from "../config";
import type { IRconClientService } from "../service";
import { RCON_CLIENT_SERVICE, RconClientService } from "../service";

const RconClientModule = new ContainerModule((bind) => {
  bind<IRconClientConfig>(RCON_CLIENT_CONFIG).to(RconClientConfig).inSingletonScope();
  bind<IRconClientService>(RCON_CLIENT_SERVICE).to(RconClientService).inSingletonScope();
});

export { RconClientModule };
