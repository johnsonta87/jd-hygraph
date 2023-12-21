"use client";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

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
  heading?: string;
  list: MyProcessListType[];
};

const ProcessList = ({ heading, list }: Props) => {
  return (
    <>
      {heading && (
        <Text as="h2" mb={{ base: "24px", md: "40px" }}>
          {heading}
        </Text>
      )}

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={8}
      >
        {list &&
          list?.map((listItem) => {
            return (
              <GridItem key={listItem?.id}>
                <Flex alignItems="start" gap={4}>
                  {listItem.icon?.url && (
                    <Image
                      boxSize="56px"
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
              </GridItem>
            );
          })}
      </Grid>
    </>
  );
};

export default ProcessList;
