const projects: string[] = ['pinyin-utools-plugin'];

interface Badges {
  github?: string;
}

interface Project {
  id: string;
  title: string;
  stack: string[];
  url: string;
  badges: Badges;
  content: string;
}

const projectsList: Project[] = projects.map(id => ({
  id,
  ...require(`./${id}/meta.json`),
  content: require(`./${id}/README.md`).default
}));

export default projectsList;
