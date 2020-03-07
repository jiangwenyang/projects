import React from "react";
import Link from "next/link";

interface LinkItem {
  href: string;
  label: string;
  key?: string;
}

const links: LinkItem[] = [
  { href: "https://github.com/jiangwenyang", label: "GitHub" },
  { href: "https://blog.jiangwenyang.com", label: "Blog" }
].map((link: LinkItem) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
