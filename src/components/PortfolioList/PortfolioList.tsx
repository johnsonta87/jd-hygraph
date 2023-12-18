import {
  GetAllPortfoliosDocument,
  GetAllPortfoliosQuery,
} from "@/gqlgen/graphql";
import { useQuery } from "@apollo/client";
import { Grid, GridItem } from "@chakra-ui/react";
import BaseImage from "../Image/BaseImage";

type Props = {
  variant: "default" | "custom";
};

export async function PortfolioList({ variant }: Props) {
  const { loading, data } = useQuery<GetAllPortfoliosQuery>(
    GetAllPortfoliosDocument
  );
  console.log(data);

  const portfolios = data?.portfolios;

  return (
    <Grid>
      {loading && <p>Loading...</p>}

      {portfolios &&
        portfolios.map((p, index: number) => (
          <GridItem key={index} area={"side"}>
            <BaseImage
              src={p.showcaseImage?.url || ""}
              title={p.title || ""}
              caption={p.title || ""}
              year={p.year || ""}
            />
          </GridItem>
        ))}
    </Grid>
  );
}
