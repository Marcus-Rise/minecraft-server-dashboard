import type { NextApiHandler } from "next";
import type { IWikiApiService } from "../../src/server";
import { inject, WIKI_API_SERVICE } from "../../src/server";
import type { Item } from "../../src/common";

const ItemHandler: NextApiHandler = async (req, res, wiki = inject<IWikiApiService>(WIKI_API_SERVICE)) => {
  const { title } = req.query;

  if (!title) {
    const items = await wiki.parseItems();
    res.json(items);
  } else if (typeof title === "string") {
    const item = await wiki.parseItem(title);

    if (item) {
      res.json([item]);
    } else {
      res.status(404).end();
    }
  } else if (Array.isArray(title)) {
    const titles = title.map((i) => wiki.parseItem(i));
    const items = await Promise.all(titles);
    const itemsNotNull = items.filter((i): i is Item => !!i);

    if (itemsNotNull.length) {
      res.json(itemsNotNull);
    } else {
      res.status(404).end();
    }
  }
};

export default ItemHandler;
