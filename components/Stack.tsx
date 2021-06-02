import Image from "next/image";
import stacks from "../stacks/stacks.json";

interface StackItem {
  name: string;
  url: string;
  cover: string;
}

interface StackProps {
  stackKey: string;
}

const Stack: React.FC<StackProps> = (props) => {
  const { stackKey } = props;
  if (!stackKey) return null;
  const stack: StackItem = stacks[stackKey];
  if (!stack) return null;
  const { name, url, cover } = stack;
  return (
    <a
      href={url}
      className="flex items-center text-sm gap-1 rounded p-1 hover:bg-gray-200 hover:text-white transition ease-in-out"
    >
      <Image
        src={require(`../stacks/icons/${stackKey}.svg`).default}
        alt="name"
        width="20px"
        height="20px"
      />
      {name}
    </a>
  );
};

export default Stack;
