import { createContext, useState } from "react";
import all_products from "../data/products";
import { ItemProps } from "@/types";

interface ShopContextType {
  all_products: ItemProps[];
  cartItems: { [key: number]: number };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  getTotalCartItems: () => number;
}

export const ShopContext = createContext<ShopContextType | null>(null);

export const getDefaultCart = () => {
  let cart: { [key: number]: number } = {};

  for (let i = 1; i < all_products.length + 1; i++) {
    cart[i] = 0;
  }

  return cart;
};

const ShopContextProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = all_products.find(
          (product) => product.id === Number(itemId)
        );
        if (itemInfo) {
          total += itemInfo.new_price * cartItems[itemId];
        }
      }
    }
    return total;
  };

  const getTotalCartItems = () => {
    let total = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        total += cartItems[itemId];
      }
    }
    return total;
  };

  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
