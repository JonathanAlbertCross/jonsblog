import { getPostBySlug, getPosts } from "@/lib/post";
import Link from "next/link";

export default function Page() {
  const posts = getPosts();
  return (
    <div>
      <h2></h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
