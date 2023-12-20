"use client";
import { useGetAllProcessQuery as GetAllProcessQuery } from "@/__generated__/graphql";
import {
  Box,
  Flex,
  List,
  ListIcon,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

type Props = {};

const ProcessList = (props: Props) => {
  const { loading, data } = GetAllProcessQuery();
  const { processes } = data || {};

  if (loading) return <Spinner size="xl" mx-auto />;

  return (
    <Box>
      <List spacing="40px">
        {processes?.map((process) => {
          return (
            <ListItem key={process?.id}>
              <Flex justifyContent="start" alignItems="start">
                <ListIcon mt={2} color="green.500" />
                <Flex
                  justifyContent="center"
                  flexDirection="column"
                  alignItems="start"
                >
                  <Box mb="12px">
                    <Text as="h3" fontSize="1.313rem" textTransform="uppercase">
                      {process?.name}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      as="span"
                      fontSize="1.125rem"
                      dangerouslySetInnerHTML={{
                        __html: process?.content?.html,
                      }}
                    />
                  </Box>
                </Flex>
              </Flex>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default ProcessList;
