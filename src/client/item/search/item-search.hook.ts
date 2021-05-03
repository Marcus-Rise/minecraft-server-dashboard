import { useCallback, useState } from "react";
import type { Item } from "../../../common";

interface ItemSearchDto {
  query: string;
}

const useItemSearch = () => {
  const [result, setResult] = useState<Item[] | null>([]);

  const sendQuery = useCallback(async ({ query }: ItemSearchDto) => {
    const searchParams = new URLSearchParams();
    searchParams.append("title", query);

    return fetch("/api/item?" + searchParams.toString())
      .then((res) => res.json())
      .then(setResult)
      .catch((e) => {
        console.error(e);
        setResult(null);
      });
  }, []);

  return { result, sendQuery };
};

export { useItemSearch };
export type { ItemSearchDto };
