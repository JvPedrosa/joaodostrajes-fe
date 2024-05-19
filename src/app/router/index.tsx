import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { ShopCategory } from "../../pages/ShopCategory";
import { Product } from "../../pages/Product";
import { Cart } from "../../pages/Cart";
import { LoginSignup } from "../../pages/LoginSignup";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/masculino"
        element={<ShopCategory category="masculino" />}
      />
      <Route path="/feminino" element={<ShopCategory category="feminino" />} />

      <Route path="/produto" element={<Product />}>
        <Route path=":productId" element={<Product />} />
      </Route>

      <Route path="/carrinho" element={<Cart />} />
      <Route path="/login" element={<LoginSignup />} />
    </Routes>
  );
};
