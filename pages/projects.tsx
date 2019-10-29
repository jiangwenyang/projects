import React from 'react';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import projects from '../projects';

import siteInfo from '../siteInfo.json';

const Projects = () => {
  const router = useRouter();
  const pageInfo = siteInfo[router.pathname];
  return (
    <Layout widthHeader>
      <Head>
        <title>Projects - JWY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="content">
        <div className="about">
          <h1>{pageInfo.title}</h1>
          {Array.isArray(pageInfo.description) ? (
            pageInfo.description.map((item, idx) => <p key={idx}>{item}</p>)
          ) : (
            <p>{pageInfo.description}</p>
          )}
        </div>

        <ul className="project-list">
          {projects.map(project => (
            <li key={project.id}>
              <div className="card">
                <img
                  src={require(`../projects/${project.id}/cover.png`)}
                  alt={project.title}
                  className="card-img"
                />
                <div className="card-content">
                  <h2>{project.title}</h2>
                  <ul className="techStack-list">
                    {project.stack.map(item => (
                      <li className="techStack-item" key={item}>
                        <a href="">{item}</a>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <ReactMarkdown source={project.content} />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .content {
          box-sizing: border-box;
          width: 80%;
          min-height: calc(100vh - 100px);
          margin: 0 auto;
          overflow: hidden;
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
};

export default Projects;
