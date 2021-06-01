import { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/index.module.css";
import classnames from "classnames";
import { Layout, Entry, JinRiShiCi } from "../components";
import { entry } from "../siteInfo.json";

const Home: NextPage = () => {
  const renderEntrys = () =>
    entry.map((item, index) => <Entry key={index} {...item} />);

  return (
    <Layout widthHeader={false} widthFooter={false}>
      <Head>
        <title>Home - JWY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className="mt-12 sm:mt-24 md:mt-48 text-2xl font-semibold text-center">
          Code or Cat? This is a question...
        </h1>
      </header>
      <main className={classnames([styles.main, "mt-24"])}>
        <section className="flex flex-row  justify-center items-center z-50">
          {renderEntrys()}
        </section>
        <section
          className={classnames([styles.jinrishici, "invisible", "sm:visible"])}
        >
          <JinRiShiCi />
        </section>
        <div className={styles.wave}></div>
      </main>
    </Layout>
  );
};

export default Home;
