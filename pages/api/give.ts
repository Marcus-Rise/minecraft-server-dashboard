import type { NextApiHandler } from "next";
import type { IRconClientService } from "../../src/server";
import { GiveCommandModel, inject, RCON_CLIENT_SERVICE } from "../../src/server";

const GiveHandler: NextApiHandler = async (req, res, rcon = inject<IRconClientService>(RCON_CLIENT_SERVICE)) => {
  const { item, target, count } = req.body;

  await rcon.connect();

  await rcon
    .send(new GiveCommandModel(target, item, count))
    .then(res.send)
    .catch((e: Error) => {
      res.status(500).send(e?.message ?? e);
    });

  await rcon.disconnect();
};

export default GiveHandler;
