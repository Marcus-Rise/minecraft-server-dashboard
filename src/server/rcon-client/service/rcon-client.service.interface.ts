import type { CommandModel } from "../models";

interface IRconClientService {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  send(command: CommandModel): Promise<string>;
}

export type { IRconClientService };
