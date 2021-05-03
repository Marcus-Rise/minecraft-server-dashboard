import type { AppProps } from "next/app";
import type { FC } from "react";
import Link from "next/link";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <header>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Message</Link>
          </li>
          <li>
            <Link href={"/search"}>Search</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Component {...pageProps} />
  </>
);

export default MyApp;
