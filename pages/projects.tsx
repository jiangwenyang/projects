import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const Projects = () => (
  <Layout widthHeader>
    <Head>
      <title>Projects - JWY</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="content">
      <div className="about">
        <h1>我写的一些小东西</h1>
        <p>写代码我所欲也,撸猫我所欲也,两者皆可得兼</p>
      </div>

      <ul className="project-list">
        <li>
          <div className="card">
            <img
              src="/pinyin.png"
              alt="uTools 汉字转拼音插件"
              className="card-img"
            />
            <div className="card-content">
              <h2>uTools 汉字转拼音插件</h2>
              <ul className="techStack-list">
                <li className="techStack-item">
                  <a href="">Typescript</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <style jsx>{`
      .content {
        box-sizing: border-box;
        width: 80%;
        min-height: calc(100vh - 100px);
        margin: 40px auto;
      }
      .about {
        text-align: center;
        margin-bottom: 20px;
      }
      .card {
        display: flex;
        just-content: space-between;
        padding: 2em;
        background: #fff;
        box-shadow: 0 6px 6px -6px rgba(0, 0, 0, 0.33);
      }
      .card-img {
        width: 200px;
        height: 200px;
        margin-right: 20px;
      }
      .card:hover {
        box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.33);
      }
    `}</style>
  </Layout>
);

export default Projects;
