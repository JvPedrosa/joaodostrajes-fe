import { Pool } from "@mui/icons-material";
import {
  HandIcon,
  HeroContainer,
  HeroLatestBtn,
  HeroLeft,
  HeroRight,
} from "./styles";
import pure_intent_masc from "../../assets/pure-intent-masc.png";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroLeft>
        <h2>Nossos produtos</h2>
        <div>
          <HandIcon>
            <p>Trajes</p>
            <Pool />
          </HandIcon>
          <p>tecnológicos</p>
          <p>para todos</p>
        </div>

        <HeroLatestBtn>
          <div>Mais recentes</div>
          <Pool />
        </HeroLatestBtn>
      </HeroLeft>

      <HeroRight>
        <img src={pure_intent_masc} alt="Pure Intent" />
      </HeroRight>
    </HeroContainer>
  );
};
