import { Rule } from "@sanity/types";

const post = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "metadata",
      title: "Metadata",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        unique: true,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, ""),
      },
      validation: (Rule: Rule) =>
        Rule.required().custom((fields: { current?: string }) => {
          if (fields?.current) {
            const current = fields.current;
            if (current !== current.toLowerCase() || current.split(" ").includes("")) {
              return "Slug must be lowercase and not include spaces";
            }
          }
          return true;
        }),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      validation: (Rule: Rule) => Rule.required(),
      of: [
        {
          type: "string",
          validation: (Rule: Rule) =>
            Rule.custom((fields: string) => {
              if (fields !== fields.toLowerCase() || fields.split(" ").includes("")) {
                return "Tags must be lowercase and not include spaces";
              }
              return true;
            }),
        },
      ],
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection: { title: string; author?: string; media?: string }) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author ? `by ${author}` : undefined,
      });
    },
  },
};

export default post;