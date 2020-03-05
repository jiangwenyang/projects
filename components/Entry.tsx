import React from "react";
import Card from "./Card";
import Link from "next/link";

interface EntryProps {
  url: string;
  icon: string;
  title: string;
  description: string;
}

const Entry: React.FC<EntryProps> = ({ url, icon, title, description }) => {
  return (
    <Card className="entry">
      <Link href={url || "#"}>
        <a>
          <img src={icon} alt="blog" className="entry-bg" />
          <div className="entry-content">
            <h2 className="entry-title">{title}</h2>
            <p className="entry-description">{description}</p>
          </div>
        </a>
      </Link>
    </Card>
  );
};

export default Entry;
