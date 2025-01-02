import { PortableTextBlock, Slug } from "sanity";

export type Author = {
  name: string,
  image: string,
  bio?: string,
  slug: {
    current: string,
  },
  _id?: number | string,
  _ref?: number | string,
};

export type Blog = {
  _id: number,
  title: string,
  slug: Slug,
  metadata: string,
  body: PortableTextBlock[],
  mainImage: unknown,
  author: Author,
  tags: string[],
  publishedAt: string,
};