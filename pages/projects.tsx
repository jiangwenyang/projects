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
      <header className="py-10 bg-gradient-to-r from-green-400 to-blue-500 text-white text-center">
        <h1 className="text-2xl leading-10">{siteInfo.projects.title}</h1>
        <p className="text-sm mt-2">{siteInfo.projects.description}</p>
      </header>
      <main className="flex-1 flex justify-center py-6">
        <div className="w-full sm:w-2/3 mx-auto">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Projects;
