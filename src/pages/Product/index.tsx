import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useParams } from "react-router-dom";
import { ItemProps } from "../../types";
import { Breadcrum } from "./components/Breadcrum";
import { ProductDisplay } from "./components/ProductDisplay";
import { DescriptionBox } from "./components/DescriptionBox";
import { RelatedProducts } from "./components/RelatedProducts";

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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};
