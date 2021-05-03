import type { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import Image from "next/image";
import type { ItemSearchDto } from "../src/client";
import { useItemSearch } from "../src/client";

const Search: FC = () => {
  const { control, handleSubmit } = useForm<ItemSearchDto>({ defaultValues: { query: "" } });
  const { result, sendQuery } = useItemSearch();

  return (
    <>
      <main>
        <form onSubmit={handleSubmit(sendQuery)}>
          <Controller
            control={control}
            rules={{ required: true }}
            name={"query"}
            render={({ field }) => (
              <>
                <label htmlFor={field.name}>{field.name}:</label>
                <input
                  id={field.name}
                  type="text"
                  name={field.name}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </>
            )}
          />
          <button type="submit">Query</button>
        </form>
        {result?.map((i) => (
          <div key={i.key}>
            <b>
              <a href={i.link} target={"_blank"} rel={"noreferrer"}>
                {i.key}
              </a>
            </b>
            <p>{i.description}</p>

            {!!i.image && <Image src={i.image} alt={i.key} width={200} height={200} />}
          </div>
        )) ?? <p>not found</p>}
      </main>
    </>
  );
};

export default Search;
