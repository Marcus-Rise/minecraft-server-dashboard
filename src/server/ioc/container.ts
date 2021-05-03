import "reflect-metadata";
import { Container } from "inversify";
import { RconClientModule } from "../rcon-client";
import { WikiApiModule } from "../wiki-api";

const container = new Container();

container.load(RconClientModule, WikiApiModule);

export { container };
