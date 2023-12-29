"use client";
import { Divider, Flex, Text } from "@chakra-ui/react";

type Props = {
  role: string;
  overview: string;
};

export function OverviewItem({ role, overview }: Props) {
  if (!role || !overview) return;

  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexBasis="100%"
    >
      <Divider mb="12px" />
      <Text w="100%" fontSize="14px" fontWeight="400" textTransform="uppercase">
        {role}
      </Text>
      <Text w="100%" mb="32px">
        {overview}
      </Text>
    </Flex>
  );
}
