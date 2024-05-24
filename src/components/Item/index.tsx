import { Link } from "react-router-dom";
import {
  ItemContainer,
  ItemPriceNew,
  ItemPriceOld,
  ItemPrices,
} from "./styles";
import { ItemProps } from "../../types";

export const Item = ({ item }: { item: ItemProps }) => {
  return (
    <ItemContainer>
      <Link to={`/produto/${item.id}`} style={{ textDecoration: "none" }}>
        <img src={item.image} alt="Item" />
        <p>{item.name}</p>
        <ItemPrices>
          <ItemPriceNew>
            <p>R$ {item.new_price}</p>
          </ItemPriceNew>
          <ItemPriceOld>
            <p>R$ {item.old_price}</p>
          </ItemPriceOld>
        </ItemPrices>
      </Link>
    </ItemContainer>
  );
};
