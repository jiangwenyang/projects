import useSWR from "swr";
import { load } from "../../utils/jinrishici";
import styles from "./index.module.css";
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
            title: "相思",
          },
        },
      },
    }
  );
  const {
    content,
    origin: { title, author },
  } = (data as JinriShiCi).data;
  return (
    <div className={styles["verses"]}>
      <p className={styles["verses-content"]}>{content}</p>
      <div className={styles["verses-origin"]}>
        <span className={styles["verses-title"]}>「{title}」</span>
        <span className={styles["verses-author"]}>{author}</span>
      </div>
    </div>
  );
};

export default JinRiShiCi;
