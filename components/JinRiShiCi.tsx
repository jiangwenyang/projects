import useSWR from "swr";
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
        const jinrishici = require("jinrishici");
        jinrishici.load(resolve, reject);
      });
    },
    {
      initialData: {
        data: {
          content: "",
          origin: {
            title: "",
            author: ""
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
    <div>
      <p>{content}</p>
      <div>
        <span>「{title}」</span>
        <span>{author}</span>
      </div>
    </div>
  );
};

export default JinRiShiCi;
