import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const Projects = () => (
  <Layout widthNav>
    <Head>
      <title>Projects - JWY</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="content">
      <div>
        <h1>我写的一些小东西</h1>
        <p>写代码我所欲也</p>
        <p>撸猫我所欲也</p>
        <p>两者皆可得兼</p>
      </div>
    </div>
    <style jsx>{`
      .content {
        height: 100%;
      }
    `}</style>
  </Layout>
);

export default Projects;
