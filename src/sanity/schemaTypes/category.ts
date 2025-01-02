import { Rule } from "@sanity/types";

const category = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "tagname",
      title: "Tag Name",
      type: "string",
      options: {
        source: "tagname",
        unique: true,
        slugify: (input: string) => {
          return input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "");
        },
      },
      validation: (Rule: Rule) =>
        Rule.custom((fields: string) => {
          if (fields !== fields.toLowerCase() || fields.split(" ").includes("")) {
            return "Tags must be lowercase and not include spaces";
          }
          return true;
        }),
    },
    {
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};

export default category;