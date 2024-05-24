import { useContext } from "react";
import {
  ShopCategoryContainer,
  ShopCategoryIndexSort,
  ShopCategoryLoadMore,
  ShopCategoryProducts,
} from "./styles";
import { ShopContext } from "../../context/ShopContext";
import { ArrowDropDown } from "@mui/icons-material";
import { ItemProps } from "@/types";
import { Item } from "../../components/Item";

export const ShopCategory = ({
  category,
}: {
  category: "masculino" | "feminino";
}) => {
  const context = useContext(ShopContext);

  if (!context) return null;

  const { all_products } = context;

  return (
    <ShopCategoryContainer>
      <ShopCategoryIndexSort>
        <p>
          <span>Mostrando 1-12</span> de 36 produtos
        </p>
        <button>
          Ordenar por <ArrowDropDown />
        </button>
      </ShopCategoryIndexSort>

      <ShopCategoryProducts>
        {all_products.map((item: ItemProps) => {
          if (item.category === category) {
            return <Item key={item.id} item={item} />;
          }
        })}
      </ShopCategoryProducts>
      <ShopCategoryLoadMore>Carregar mais</ShopCategoryLoadMore>
    </ShopCategoryContainer>
  );
};
