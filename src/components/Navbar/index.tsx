import { ShoppingCartOutlined } from "@mui/icons-material";
import {
  NavCartCount,
  NavContainer,
  NavLoginCart,
  NavLogo,
  NavMenu,
} from "./styles";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { ShopContext } from "../../context/ShopContext";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const context = useContext(ShopContext);

  if (!context) return null;

  const { getTotalCartItems } = context;

  return (
    <NavContainer>
      <Link to="/">
        <NavLogo>
          <img src={logo} alt="João dos Trajes" />
          <p>João dos Trajes</p>
        </NavLogo>
      </Link>

      <NavMenu>
        <li onClick={() => setMenu("home")}>
          <Link to="/">Página Inicial</Link>
          {menu === "home" && <hr />}
        </li>
        <li onClick={() => setMenu("masculino")}>
          <Link to="/masculino">Masculinos</Link>
          {menu === "masculino" && <hr />}
        </li>
        <li onClick={() => setMenu("feminino")}>
          <Link to="/feminino">Femininos</Link>
          {menu === "feminino" && <hr />}
        </li>
      </NavMenu>

      <NavLoginCart>
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/carrinho">
          <ShoppingCartOutlined sx={{ color: "#171717" }} />
        </Link>

        <NavCartCount>{getTotalCartItems()}</NavCartCount>
      </NavLoginCart>
    </NavContainer>
  );
};
