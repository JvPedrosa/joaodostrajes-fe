import { BreadcrumContainer } from "./styles";
import { ItemProps } from "../../../../types";
import { KeyboardArrowRight } from "@mui/icons-material";

export const Breadcrum = ({ product }: { product: ItemProps }) => {
  return (
    <BreadcrumContainer>
      HOME
      <KeyboardArrowRight />
      SHOP
      <KeyboardArrowRight />
      {product.category}
      <KeyboardArrowRight />
      {product.name}
    </BreadcrumContainer>
  );
};
