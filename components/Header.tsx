import React from "react";
import Link from "next/link";

import { navs } from "../siteInfo.json";

const Header = () => (
  <header>
    <nav className="h-12 px-2 absolute">
      <ul className="h-full flex items-center gap-x-1 text-white font-mono font-semibold">
        {navs.map(({ url, title }) => (
          <li
            key={title}
            className="flex items-center hover:underline p-1 transition ease-in-out"
          >
            <Link href={url}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
