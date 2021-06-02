import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Stack from "./Stack";
import { Project as ProjectProps } from "../projects";

const Project: React.FC<ProjectProps> = (props) => {
  const { title, stacks, url, content, badges, cover } = props;

  const bgSize = 120;

  const BadgesContent = (
    <ul className="flex gap-1 mt-2">
      {badges.map((badge) => (
        <li key={badge.type}>
          <ReactMarkdown source={badge.markdown} />
        </li>
      ))}
    </ul>
  );

  const titleContent = (
    <h2 className="text-2xl text-gray-700 mb-2">
      <a href={url} className="mr-2">
        {title}
      </a>
    </h2>
  );

  const DescriptionContent = (
    <ReactMarkdown source={content} className="py-2 text-gray-600" />
  );

  const StacksContent = (
    <ul className="flex gap-2">
      {stacks.map((stack) => (
        <li key={stack}>
          <Stack stackKey={stack} />
        </li>
      ))}
    </ul>
  );

  return (
    <article className="flex gap-4  px-4 py-2 shadow-md sm:rounded-md group">
      <div
        className="transition ease-in-out duration-300 transform relative group-hover:scale-105"
        style={{
          width: `${bgSize}px`,
          height: `${bgSize}px`,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${cover})`,
            width: `${bgSize}px`,
            height: `${bgSize}px`,
          }}
          className="absolute rounded-md opacity-60 filter blur-xl transform scale-0 group-hover:scale-105 bg-no-repeat bg-center bg-contain"
        ></div>
        <div className="absolute">
          <Image src={cover} alt={title} width={bgSize} height={bgSize} />
        </div>
      </div>

      <div className="flex-1">
        {titleContent}

        {StacksContent}

        {BadgesContent}

        {DescriptionContent}
      </div>
    </article>
  );
};

export default Project;
