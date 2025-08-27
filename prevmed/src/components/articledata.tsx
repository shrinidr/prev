import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface ArticleProps {
  slug: string; // e.g. "article1"
}

export default function Article({ slug }: ArticleProps) {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    console.log("hello", slug)
    fetch(`/articles/${slug}.md`)
      .then(res => {
        if (!res.ok) throw new Error("File not found");
        return res.text();
      })
      .then(setContent)
      .catch(err => setContent(`# Error\n${err.message}`));
  }, [slug]);

  return (
    <div className="article">
      <ReactMarkdown 
      remarkPlugins={[remarkGfm]} 
      rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
