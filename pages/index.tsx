import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout widthHeader={false} widthFooter={false}>
      <Head>
        <title>Home - JWY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
};

export default Home;
