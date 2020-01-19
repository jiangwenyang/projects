import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  widthHeader?: boolean;
  widthFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = props => {
  const { widthHeader, widthFooter, children } = props;
  return (
    <div className="flex flex-col w-screen h-screen">
      {widthHeader && <Header />}
      {children}
      {widthFooter && <Footer />}
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
