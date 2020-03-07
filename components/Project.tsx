import Stack from "./Stack";
import { Project as ProjectProps } from "../projects";
import ReactMarkdown from "react-markdown";

const Project: React.FC<ProjectProps> = props => {
  const { title, stacks, url, content, badges } = props;

  const StacksContent = stacks.map(stack => (
    <Stack key={stack} stackKey={stack} />
  ));

  const BadgesContent = badges.map(badge => (
    <ReactMarkdown key={badge.type} source={badge.markdown} />
  ));

  return (
    <article>
      <h2>
        <a href={url}>{title}</a>
      </h2>
      <ReactMarkdown source={content} />
      {StacksContent}
      {BadgesContent}
    </article>
  );
};

export default Project;
