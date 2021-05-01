import type { IRconClientConfig } from "./rcon-client.config.interface";
import { injectable } from "inversify";

@injectable()
class RconClientConfig implements IRconClientConfig {
  readonly host: string = process.env.RCON_HOST ?? "localhost";
  readonly password: string = process.env.RCON_PASSWORD ?? "password";
  readonly port: number = Number(process.env.RCON_PORT ?? 8080);
}

export { RconClientConfig };
