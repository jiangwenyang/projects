export interface Badge {
  type: string;
  markdown: string;
}

export interface Project {
  title: string;
  stacks: string[];
  url: string;
  badges: Badge[];
  cover: string;
  content: string;
}

const projectsModule = require.context("../projects/", true, /meta.json/);

const projects: Project[] = projectsModule.keys().map((key) => {
  const projectNameReg = /^.*\/(.+)\/meta\.json$/i;
  const projectName = key.match(projectNameReg)[1];
  const meta = require(`${key}`);

  return {
    ...meta,
    cover: require(`./${projectName}/cover.svg`).default,
    content: require(`./${projectName}/README.md`).default,
  };
});

export default projects;
