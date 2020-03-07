const projectKeys: string[] = ["pinyin-utools-plugin"];

export interface Badge {
  type: string;
  markdown: string;
}

export interface Project {
  id: string;
  title: string;
  stacks: string[];
  url: string;
  badges: Badge[];
  content: string;
}

const projects: Project[] = projectKeys.map(id => ({
  id,
  ...require(`./${id}/meta.json`),
  content: require(`./${id}/README.md`).default
}));

export default projects;
