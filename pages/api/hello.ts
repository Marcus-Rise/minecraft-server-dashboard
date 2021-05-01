import type { NextApiHandler } from "next";
import type { IRconClientService } from "../../src/server";
import { inject, RCON_CLIENT_SERVICE, MessageCommandModel } from "../../src/server";

const Test: NextApiHandler = async (req, res, rconClient = inject<IRconClientService>(RCON_CLIENT_SERVICE)) => {
  await rconClient.connect();

  const result = await rconClient.send(new MessageCommandModel("Kotuva", "hi"));

  await rconClient.disconnect();

  res.json(result);
};

export default Test;
