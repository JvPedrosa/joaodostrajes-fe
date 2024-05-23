import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useParams } from "react-router-dom";
import { ItemProps } from "../../types";
import { Breadcrum } from "../../components/Breadcrums";

export const Product = () => {
  const context = useContext(ShopContext);

  const { productId } = useParams();

  if (!context) {
    return <div>Loading...</div>;
  }

  const product = context.all_products.find(
    (product: ItemProps) => product.id === Number(productId)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrum product={product}></Breadcrum>
    </div>
  );
};
