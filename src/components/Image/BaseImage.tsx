import { Box, Image } from "@chakra-ui/react";

type Props = {
  title: string;
  src: string;
  caption?: string;
  year?: string;
};

const BaseImage = ({ title, src, caption, year }: Props) => {
  if (!src && !title) return;

  return (
    <Box>
      <Image src={src} alt={title || "Image description"} />
      {caption && (
        <Box>
          <caption>{caption}</caption>
          {year && <span>{year}</span>}
        </Box>
      )}
    </Box>
  );
};

export default BaseImage;
