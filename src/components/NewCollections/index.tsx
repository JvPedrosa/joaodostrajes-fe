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
          <Item key={item.id} item={item} />
        ))}
      </Collections>
    </NewCollectionsContainer>
  );
};
