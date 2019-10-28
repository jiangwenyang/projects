import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  widthHeader?: boolean;
  widthFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = props => {
  const { widthHeader, widthFooter, children } = props;
  return (
    <div className="content-wrap">
      <Head>
        <link rel="stylesheet" href="/normalize.css" />
      </Head>
      {widthHeader && <Header />}
      {children}
      {widthFooter && <Footer />}
      <style global jsx>
        {`
          body {
            color: #24292e;
          }
          ul,
          ol {
            margin: 0;
            padding: 0;
            list-style: none;
          }
          li {
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
            position: relative;
          }
        `}
      </style>
    </div>
  );
};

Layout.propTypes = {
  widthHeader: PropTypes.bool,
  widthFooter: PropTypes.bool
};

Layout.defaultProps = {
  widthHeader: true,
  widthFooter: true
};

export default Layout;
