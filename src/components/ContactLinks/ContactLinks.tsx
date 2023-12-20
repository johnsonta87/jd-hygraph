"use client";
import { Box, Image, Link, List, ListItem, Text } from "@chakra-ui/react";

export type ContactLinksType = {
  id: string;
  title: string;
  link?: string;
  file?: {
    fileName: string;
    url: string;
  };
  isExternal?: boolean;
  icon?: {
    url: string;
    fileName: string;
  };
};

type Props = {
  list: ContactLinksType[];
  sectionTitle: string;
};

const ContactLinks = ({ list, sectionTitle }: Props) => {
  return (
    <Box>
      {sectionTitle && (
        <Text as="h2" mb="47px">
          {sectionTitle}
        </Text>
      )}

      <List display="flex" alignItems="center" gap={24}>
        {list &&
          list?.map((listItem) => (
            <ListItem key={listItem.id}>
              <Link
                display="flex"
                alignItems="center"
                gap={4}
                href={listItem.link || listItem.file?.url}
                isExternal={listItem.isExternal}
              >
                {listItem.icon?.url && (
                  <Image
                    borderRadius="full"
                    boxSize="48px"
                    src={listItem.icon.url}
                    alt={`${listItem.title} icon`}
                  />
                )}
                {listItem.title}
              </Link>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default ContactLinks;
