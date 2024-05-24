import { RelatedProductsContainer, RelatedProductsItem } from "./styles";
import data_product from "../../../../data/products";
import { ItemProps } from "../../../../types";
import { Item } from "../../../../components/Item";
export const RelatedProducts = () => {
  return (
    <RelatedProductsContainer>
      <h1>Produtos relacionados</h1>
      <hr />
      <RelatedProductsItem>
        {data_product.map((product: ItemProps) => (
          <Item key={product.id} item={product} />
        ))}
      </RelatedProductsItem>
    </RelatedProductsContainer>
  );
};
