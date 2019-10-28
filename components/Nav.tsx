import React from 'react';
import Link from 'next/link';

interface LinkItem {
  href: string;
  label: string;
  key?: string;
}

const links: LinkItem[] = [
  { href: 'https://github.com/jiangwenyang', label: 'GitHub' }
].map((link: LinkItem) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
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

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        background: #24292e;
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
        color: 'red';
      }
      a {
        padding: 0 10px;
        color: #fff;
        text-decoration: none;
        font-size: 20px;
        height: 50px;
        line-height: 50px;
      }
      a:hover {
        color: hsla(0, 0%, 100%, 0.7);
        text-decoration: none;
      }
    `}</style>
  </nav>
);

export default Nav;
