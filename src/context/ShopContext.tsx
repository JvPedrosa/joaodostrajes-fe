import { createContext } from "react";
import all_products from "../data/products";
import { ItemProps } from "@/types";

interface ShopContextType {
  all_products: ItemProps[];
}

export const ShopContext = createContext<ShopContextType | null>(null);

const ShopContextProvider = ({ children }: any) => {
  const contextValue = { all_products };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
