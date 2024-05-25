import { useContext } from "react";
import {
  CartItemsContainer,
  CartItemsDown,
  CartItemsFormat,
  CartItemsFormatMain,
  CartItemsPromoBox,
  CartItemsPromoCode,
  CartItemsTotal,
  CartItemsTotalItem,
} from "./styles";
import { ShopContext } from "../../../../context/ShopContext";
import { RemoveCircleOutline } from "@mui/icons-material";
import { ItemProps } from "@/types";

export const CartItems = () => {
  const context = useContext(ShopContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { all_products, cartItems, removeFromCart, getTotalCartAmount } =
    context;

  return (
    <CartItemsContainer>
      <CartItemsFormatMain>
        <p>Produtos</p>
        <p>Nome</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
        <p>Remover</p>
      </CartItemsFormatMain>
      <hr />
      {all_products.map((product: ItemProps) => {
        if (cartItems[product.id] > 0) {
          return (
            <CartItemsFormat>
              <img src={product.image} alt={all_products[0].name} />
              <p>{product.name}</p>
              <p>{product.new_price}</p>
              <button>{cartItems[product.id]}</button>
              <p>R$ {(product.new_price * cartItems[product.id]).toFixed(2)}</p>
              <RemoveCircleOutline
                className="remove-icon"
                onClick={() => removeFromCart(product.id)}
              />
            </CartItemsFormat>
          );
        }
        return null;
      })}
      <hr />
      <CartItemsDown>
        <CartItemsTotal>
          <h1>Total</h1>
          <div>
            <CartItemsTotalItem>
              <p>Subtotal</p>
              <p>R$ {getTotalCartAmount().toFixed(2)}</p>
            </CartItemsTotalItem>
            <hr />
            <CartItemsTotalItem>
              <p>Frete</p>
              <p>Grátis</p>
            </CartItemsTotalItem>
            <hr />
            <CartItemsTotalItem>
              <h3>Total</h3>
              <h3>R$ {getTotalCartAmount().toFixed(2)}</h3>
            </CartItemsTotalItem>
          </div>
          <button>Finalizar Compra</button>
        </CartItemsTotal>
        <CartItemsPromoCode>
          <p>Se você tiver um código promocional, utilize aqui.</p>
          <CartItemsPromoBox>
            <input type="text" placeholder="Digite seu código" />
            <button>Aplicar</button>
          </CartItemsPromoBox>
        </CartItemsPromoCode>
      </CartItemsDown>
    </CartItemsContainer>
  );
};
