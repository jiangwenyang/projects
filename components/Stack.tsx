import stacks from "../stacks/stacks.json";

interface StackItem {
  name: string;
  url: string;
  cover: string;
}

interface StackProps {
  stackKey: string;
}

const Stack: React.FC<StackProps> = props => {
  const { stackKey } = props;
  if (!stackKey) return null;
  const stack: StackItem = stacks[stackKey];
  if (!stack) return null;
  const { name, url, cover } = stack;
  return (
    <a href={url}>
      <img src={require(`../stacks/icons/${stackKey}.svg`)} alt="name" />
      {name}
      <style jsx>{`
        a {
          display: inline-block;
          text-decoration: none;
          padding: 5px 8px;
          line-height: 1;
          white-space: nowrap;
          word-break: keep-all;
          font-size: 14px;
          border-radius: 3px;
          color: inherit;
          transition: background 0.3s;
        }
        a:hover {
          background: #efefef;
          text-decoration: none;
        }
        img {
          max-width: 2em;
          height: 1em;
          vertical-align: bottom;
          margin-right: 2px;
        }
      `}</style>
    </a>
  );
};

export default Stack;
