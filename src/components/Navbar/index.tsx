import { ShoppingCartOutlined } from "@mui/icons-material";
import {
  NavCartCount,
  NavContainer,
  NavLoginCart,
  NavLogo,
  NavMenu,
} from "./styles";
import { useState } from "react";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <NavContainer>
      <NavLogo>
        <img src={require("../../assets/logo.png")} alt="João dos Trajes" />
        <p>João dos Trajes</p>
      </NavLogo>

      <NavMenu>
        <li onClick={() => setMenu("home")}>
          Página Inicial
          {menu === "home" && <hr />}
        </li>
        <li onClick={() => setMenu("masculino")}>
          Masculinos
          {menu === "masculino" && <hr />}
        </li>
        <li onClick={() => setMenu("feminino")}>
          Femininos
          {menu === "feminino" && <hr />}
        </li>
      </NavMenu>

      <NavLoginCart>
        <button>Login</button>
        <ShoppingCartOutlined />
        <NavCartCount>0</NavCartCount>
      </NavLoginCart>
    </NavContainer>
  );
};
