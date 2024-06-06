import { OffersContainer, OffersLeft, OffersRight } from "./styles";
import pure_intent_fem from "../../../../assets/pure-intent-fem.png";

export const Offers = () => {
  return (
    <OffersContainer>
      <OffersLeft>
        <h1>Ofertas Exclusivas para você</h1>
        <p>Os melhores trajes</p>
        <button>Veja agora</button>
      </OffersLeft>
      <OffersRight>
        <img src={pure_intent_fem} alt="Pure Intent" />
      </OffersRight>
    </OffersContainer>
  );
};
