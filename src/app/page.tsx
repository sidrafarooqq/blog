import { getPosts } from "@/sanity/sanity-utils";
import BlogItem from "@/components/Blog";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="py-5 min-h-screen">
      {posts?.length > 0 ? (
        posts.map((post: any) => <BlogItem key={post._id} blog={post} />)
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}