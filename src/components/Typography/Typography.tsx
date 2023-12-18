import { Text } from "@chakra-ui/react";

type Props = {
  text: string;
};

export function Typography({ text, ...props }: Props) {
  if (!text) return;

  return <Text {...props}>{text}</Text>;
}
