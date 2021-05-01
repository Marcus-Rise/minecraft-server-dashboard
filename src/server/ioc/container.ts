import "reflect-metadata";
import { Container } from "inversify";
import { RconClientModule } from "../rcon-client";

const container = new Container();

container.load(RconClientModule);

export { container };
