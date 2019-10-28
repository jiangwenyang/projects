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

    <style jsx>{`
      header {
        box-sizing: border-box;
        height: 50px;
      }
      nav {
        height: 100%;
        background: #24292e;
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
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
  </header>
);

export default Header;
