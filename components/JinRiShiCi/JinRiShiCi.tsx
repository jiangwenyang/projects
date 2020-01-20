import useSWR from "swr";
import { load } from "../../utils/jinrishici";
import "./index.css";
interface JinriShiCi {
  data: {
    content: string;
    origin: {
      title: string;
      author: string;
    };
  };
}
const JinRiShiCi = () => {
  const { data, error } = useSWR(
    "jinrishici",
    () => {
      return new Promise((resolve, reject) => {
        load(resolve, reject);
      });
    },
    {
      initialData: {
        data: {
          content: "红豆生南国，春来发几枝。",
          origin: {
            author: "王维",
            title: "相思"
          }
        }
      }
    }
  );
  const {
    content,
    origin: { title, author }
  } = (data as JinriShiCi).data;
  return (
    <div className="verses">
      <p className="verses-content">{content}</p>
      <div className="verses-origin">
        <span className="verses-title">「{title}」</span>
        <span className="verses-author">{author}</span>
      </div>
    </div>
  );
};

export default JinRiShiCi;
