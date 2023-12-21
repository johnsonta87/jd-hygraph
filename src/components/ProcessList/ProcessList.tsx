"use client";
import { Box, Flex, Image, List, ListItem, Text } from "@chakra-ui/react";

export type MyProcessListType = {
  id: string;
  name: string;
  icon?: {
    url: string;
    fileName: string;
  };
  content?: {
    html: string;
  };
};

type Props = {
  list: MyProcessListType[];
};

const ProcessList = ({ list }: Props) => {
  return (
    <List spacing="40px">
      {list &&
        list?.map((listItem) => {
          return (
            <ListItem key={listItem?.id}>
              <Flex justifyContent="start" alignItems="start" gap="4">
                {listItem.icon?.url && (
                  <Image
                    borderRadius="full"
                    boxSize="48px"
                    src={listItem.icon.url}
                    alt={`${listItem.name} icon`}
                  />
                )}
                <Flex
                  justifyContent="center"
                  flexDirection="column"
                  alignItems="start"
                >
                  <Box mb="12px">
                    <Text
                      fontSize="1.313rem"
                      color="clay"
                      textTransform="uppercase"
                    >
                      {listItem.name}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      as="span"
                      fontSize="1.125rem"
                      dangerouslySetInnerHTML={{
                        __html: listItem.content?.html || "",
                      }}
                    />
                  </Box>
                </Flex>
              </Flex>
            </ListItem>
          );
        })}
    </List>
  );
};

export default ProcessList;
