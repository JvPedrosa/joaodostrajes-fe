import { PopularContainer, PopularItem } from "./styles";
import data_product from "../../data/products";
import { Item } from "../Item";

export const Popular = () => {
  return (
    <PopularContainer>
      <h1>Populares entre os atletas</h1>
      <hr />
      <PopularItem>
        {data_product.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </PopularItem>
    </PopularContainer>
  );
};
