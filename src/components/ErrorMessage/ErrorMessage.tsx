import { Text } from "@chakra-ui/react";

type Props = {
  text: string;
};

export function ErrorMessage({ text }: Props) {
  if (!text) return;

  return <Text fontSize="lg">{text}</Text>;
}
