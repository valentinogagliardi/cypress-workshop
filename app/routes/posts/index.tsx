import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://jsonplaceholder.typicode.com/posts?_start=0&_limit=5"
      );

      if (response.ok) {
        const json = await response.json();
        setPosts(json);
      }
    })();
  }, []);

  if (!posts?.length) return <div>no posts found!</div>;

  return (
    <div>
      <h1>POST LIST</h1>
      {posts.map(({ id, title, body }) => (
        <li key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
        </li>
      ))}
    </div>
  );
};

export default Posts;
