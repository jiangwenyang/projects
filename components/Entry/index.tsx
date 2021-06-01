import React from "react";
import Card from "../Card";
import Link from "next/link";
import styles from "./index.module.css";

interface EntryProps {
  url: string;
  icon: string;
  title: string;
  description: string;
}

const Entry: React.FC<EntryProps> = ({ url, icon, title, description }) => {
  return (
    <Card className={styles.entry}>
      <Link href={url || "#"}>
        <a>
          <img src={icon} alt="blog" className={styles["entry-bg"]} />
          <div className={styles["entry-content"]}>
            <h2 className={styles["entry-title"]}>{title}</h2>
            <p className={styles["entry-description"]}>{description}</p>
          </div>
        </a>
      </Link>
    </Card>
  );
};

export default Entry;
