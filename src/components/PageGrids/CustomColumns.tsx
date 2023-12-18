import { Grid, GridItem } from "@chakra-ui/react";

type Props = {
  sectionA?: any;
  sectionB?: any;
  children?: React.ReactNode;
};

export function CustomColumns({
  sectionA,
  sectionB,
  children,
  ...props
}: Props) {
  if (!sectionA || !sectionB) return;

  return (
    <Grid
      templateAreas={`"side main"`}
      gridTemplateColumns={"260px 1fr"}
      gap="12"
    >
      <GridItem area={"side"}></GridItem>
      <GridItem area={"main"}></GridItem>
    </Grid>
  );
}
