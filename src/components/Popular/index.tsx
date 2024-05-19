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
          <Item
            key={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </PopularItem>
    </PopularContainer>
  );
};
