import Comments from "@/components/Comments";
import { getPostBySlug, getPosts } from "@/lib/post";
import { notFound } from "next/navigation";

type blogPostParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => {
    return { slug: post.slug };
  });
}

export default function Page({ params }: blogPostParams) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: post.body.html }}
        className="prose dark:prose-invert"
      ></div>
      <Comments postSlug={params.slug}></Comments>
    </div>
  );
}
