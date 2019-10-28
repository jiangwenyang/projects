import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home - JWY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="content-wrap">
        <div className="content">
          <div className="link">
            <a href="//www.jiangwenyang.com" className="link_item">
              Blog
            </a>

            <Link href="projects">
              <a className="link_item">Projects</a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .content {
          height: 100%;
          will-change: transform;
          background: url('https://source.unsplash.com/collection/190727/1600x900')
            center center/cover no-repeat #292d3e;
        }
        .link {
          position: absolute;
          top: 60%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          text-align: center;
        }
        .link_item {
          font-size: 30px;
          color: #fff;
          display: inline-block;
          padding: 10px 20px;
          width: 200px;
          border: 2px solid #ccc;
          border-radius: 4px;
        }
        .link_item:hover {
          text-decoration: none;
          background: rgba(255, 255, 255, 0.3);
        }
        .link_item:not(:last-child) {
          margin-right: 20px;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
