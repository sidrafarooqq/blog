import React from "react";
import { getPostBySlug } from "@/sanity/sanity-utils";
import RenderBodyContent from "@/components/Blog/RenderBodyContent";

// Define the props type for the page
interface PageProps {
  params: {
    slug: string; // Ensure slug is a string
  };
}

const SingleBlogPage = async ({ params }: PageProps) => {
  try {
    // Ensure params.slug is properly typed and accessible
    const slug = await Promise.resolve(params.slug); // Ensure compatibility
    const post = await getPostBySlug(slug);

    if (!post) {
      return <div>Post not found</div>;
    }

    return (
      <article className="my-10 min-h-screen mt-4 mb-10 py-10 pb-16">
        <div className="mb-5">
          <h1 className="text-4xl py-2">{post.title}</h1>
          <p className="pb-1">
            <span className="font-medium">Published:</span>{" "}
            {new Date(post.publishedAt).toDateString()}
            <span className="font-medium pl-2">by </span>
            {post.author?.name || "Unknown"}
          </p>

          <p>{post.metadata || "No metadata available"}</p>
        </div>

        <article className="prose lg:prose-xl">
          <RenderBodyContent post={post} />
        </article>
      </article>
    );
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      return <div>Error: {error.message}</div>;
    }
    return <div>An unexpected error occurred</div>;
  }
};

export default SingleBlogPage;
