import {
  ItemContainer,
  ItemPriceNew,
  ItemPriceOld,
  ItemPrices,
} from "./styles";

export const Item = ({
  image,
  name,
  new_price,
  old_price,
}: {
  image: string;
  name: string;
  new_price: number;
  old_price: number;
}) => {
  return (
    <ItemContainer>
      <img src={image} alt="Item" />
      <p>{name}</p>
      <ItemPrices>
        <ItemPriceNew>
          <p>R$ {new_price}</p>
        </ItemPriceNew>
        <ItemPriceOld>
          <p>R$ {old_price}</p>
        </ItemPriceOld>
      </ItemPrices>
    </ItemContainer>
  );
};
