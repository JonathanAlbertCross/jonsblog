import Link from "next/link";
import { getPosts } from "@/lib/post";

export default function Page() {
  const posts = getPosts();
  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is the blogs page! </h1>
      <p>My blog posts</p>
      <Link href="./"> Go Back</Link>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
