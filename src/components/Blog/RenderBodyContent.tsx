import config from "@/sanity/config/client-config";
import { Blog } from "@/types/blog";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";
import { SanityImageSource } from "@sanity/asset-utils";

// Define the type for the image value
interface ImageAsset {
  _ref: string;
  _type: "reference";
}

interface ImageValue {
  _type: "image";
  asset: ImageAsset;
  alt?: string;
}

// Lazy-loaded image component
const ImageComponent = ({
  value,
  isInline,
}: {
  value: ImageValue;
  isInline: boolean;
}) => {
  // Convert ImageValue to SanityImageSource
  const sanityImageSource: SanityImageSource = {
    asset: value.asset,
  };

  // Get image dimensions
  const { width, height } = getImageDimensions(sanityImageSource);

  return (
    <div className="my-10 overflow-hidden rounded-[15px]">
      <Image
        src={
          urlBuilder(config)
            .image(sanityImageSource)
            .fit("max")
            .auto("format")
            .url() as string
        }
        width={width}
        height={height}
        alt={value.alt || "blog image"}
        loading="lazy"
        style={{
          display: isInline ? "inline-block" : "block",
          aspectRatio: `${width} / ${height}`,
        }}
      />
    </div>
  );
};

// PortableText components configuration
const components = {
  types: {
    image: ImageComponent,
  },
};

// RenderBodyContent component
const RenderBodyContent = ({ post }: { post: Blog }) => {
  return (
    <PortableText value={post?.body} components={components} />
  );
};

export default RenderBodyContent;