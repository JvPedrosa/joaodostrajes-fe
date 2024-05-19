import { ShoppingCartOutlined } from "@mui/icons-material";
import {
  NavCartCount,
  NavContainer,
  NavLoginCart,
  NavLogo,
  NavMenu,
} from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <NavContainer>
      <Link to="/">
        <NavLogo>
          <img src={require("../../assets/logo.png")} alt="João dos Trajes" />
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

        <NavCartCount>0</NavCartCount>
      </NavLoginCart>
    </NavContainer>
  );
};
