import type { NextApiHandler } from "next";
import type { IRconClientService } from "../../src/server";
import { GiveCommandModel, inject, RCON_CLIENT_SERVICE } from "../../src/server";

const GiveHandler: NextApiHandler = async (req, res, rcon = inject<IRconClientService>(RCON_CLIENT_SERVICE)) => {
  const { item, target, count } = req.body;
  const text = await rcon.send(new GiveCommandModel(target, item, count));

  res.send(text);
};

export default GiveHandler;
