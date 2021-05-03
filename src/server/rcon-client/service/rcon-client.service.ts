import { Rcon } from "rcon-client";
import type { IRconClientService } from "./rcon-client.service.interface";
import type { IRconClientConfig } from "../config";
import type { CommandModel } from "../models";
import { inject, injectable } from "inversify";
import { RCON_CLIENT_CONFIG } from "../config";

@injectable()
class RconClientService implements IRconClientService {
  private connection: Rcon | null = null;

  constructor(@inject(RCON_CLIENT_CONFIG) private readonly config: IRconClientConfig) {}

  async connect(): Promise<void> {
    const { host, port, password } = this.config;

    this.connection = await Rcon.connect({ host, port, password });
  }

  async disconnect(): Promise<void> {
    await this.connection?.end();
  }

  async send(command: CommandModel): Promise<string> {
    if (!this.connection) {
      throw new Error("No connection");
    }

    return this.connection?.send(command.toString());
  }
}

export { RconClientService };
