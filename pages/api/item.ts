import type { NextApiHandler } from "next";
import type { IWikiApiService } from "../../src/server";
import { inject, WIKI_API_SERVICE } from "../../src/server";

const ItemHandler: NextApiHandler = async (req, res, wiki = inject<IWikiApiService>(WIKI_API_SERVICE)) => {
  const items = await wiki.parseItems();

  return res.json(items);
};

export default ItemHandler;
