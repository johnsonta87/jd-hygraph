import { List, ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";

type Props = {
  listItems: string[];
  variant?: "ordered" | "unordered" | "unstyled";
};

export function BaseList({ listItems, variant }: Props) {
  if (!listItems) return;

  if (variant === "ordered") {
    return (
      <OrderedList>
        {listItems.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </OrderedList>
    );
  }

  if (variant === "unstyled") {
    return (
      <List spacing={3}>
        {listItems.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    );
  }

  return (
    <UnorderedList>
      {listItems.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </UnorderedList>
  );
}
