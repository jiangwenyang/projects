import { Badge as BadgeProps } from "../projects";
import ReactMarkdown from "react-markdown";

const Badge: React.FC<BadgeProps> = props => {
  const { type, markdown } = props;
  return <ReactMarkdown key={type} source={markdown} />;
};

export default Badge;
