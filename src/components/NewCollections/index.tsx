import { Collections, NewCollectionsContainer } from "./styles";
import data_product from "../../data/products";
import { Item } from "../Item";

export const NewCollections = () => {
  return (
    <NewCollectionsContainer>
      <h1>Novidades</h1>
      <hr />
      <Collections>
        {data_product.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </Collections>
    </NewCollectionsContainer>
  );
};
