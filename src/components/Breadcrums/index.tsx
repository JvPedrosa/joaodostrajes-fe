import { ArrowDownward } from "@mui/icons-material";
import { BreadcrumContainer } from "./styles";
import { ItemProps } from "../../types";

export const Breadcrum = ({ product }: { product: ItemProps }) => {
  return (
    <BreadcrumContainer>
      HOME
      <ArrowDownward />
      SHOP
      <ArrowDownward />
      {product.category}
      <ArrowDownward />
    </BreadcrumContainer>
  );
};
