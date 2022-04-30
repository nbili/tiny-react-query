import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { PostDetail } from "./PostDetail";

async function fetchPosts() {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0`
  );

  return response.json();
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);

  const { data, isError, isLoading, error } = useQuery("posts", fetchPosts, {
    staleTime: 3000,
  });

  if (isLoading) return <h1>Loading</h1>;

  if (isError) return <h2>Oops {error.toString()}</h2>;

  return (
    <>
      <ul>
        {data.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button onClick={() => {}}>Previous page</button>
        <span>Page {currentPage + 1}</span>
        <button onClick={() => {}}>Next page</button>
      </div>
      <hr />

      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
