import { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/projects.module.css";
import { Layout, Project } from "../components";
import projects from "../projects";
import siteInfo from "../siteInfo.json";

const Projects: NextPage = () => {
  return (
    <Layout widthHeader widthFooter>
      <Head>
        <title>Projects - JWY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>{siteInfo.projects.title}</h1>
        <p>{siteInfo.projects.description}</p>
      </header>
      <main>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </main>
    </Layout>
  );
};

export default Projects;
