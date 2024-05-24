import { NewsLetterContainer } from "./styles";

export const NewsLetter = () => {
  return (
    <NewsLetterContainer>
      <h1>Receba nossas novidades</h1>
      <p>Cadastre-se e receba nossas novidades e promoções em seu e-mail.</p>
      <div>
        <input type="text" placeholder="Digite seu e-mail" />
        <button>Cadastrar</button>
      </div>
    </NewsLetterContainer>
  );
};
