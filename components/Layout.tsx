import React from 'react';
import Nav from './Nav';
import Head from 'next/head';
import PropTypes from 'prop-types';

interface LayoutProps {
  widthNav?: boolean;
}

const Layout: React.FC<LayoutProps> = props => {
  const { widthNav, children } = props;
  return (
    <div className="content-wrap">
      <Head>
        <link rel="stylesheet" href="/normalize.css" />
      </Head>
      {widthNav && <Nav />}
      {children}
      <style global jsx>
        {`
          body {
            color: #24292e;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          a {
            text-decoration: none;
            color: #0366d6;
          }

          a:hover {
            text-decoration: underline;
          }

          code {
            display: inline-block;
            line-height: normal;
            font-size: 0.86em;
            font-family: monaco, menlo, consolas, courier new, courier,
              monospace;
            margin: 0 0.25em;
            padding: 0 0.4em;
            border: 1px solid #ddd;
            background-color: #f8f8f8;
            border-radius: 3px;
          }
          .content-wrap {
            width: 100%;
            height: 100vh;
            overflow: hidden;
            position: relative;
          }
        `}
      </style>
    </div>
  );
};

Layout.propTypes = {
  widthNav: PropTypes.bool
};

Layout.defaultProps = {
  widthNav: false
};

export default Layout;
