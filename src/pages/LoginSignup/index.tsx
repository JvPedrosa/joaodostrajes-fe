import {
  LoginSignupAgree,
  LoginSignupContainer,
  LoginSignupFields,
  LoginSignupLogin,
  LoginSignupPage,
} from "./styles";

export const LoginSignup = () => {
  return (
    <LoginSignupPage>
      <LoginSignupContainer>
        <h1>Login</h1>

        <LoginSignupFields>
          <input type="text" placeholder="Seu nome" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Senha" />
        </LoginSignupFields>

        <button>Continuar</button>

        <LoginSignupLogin>
          <p>Ainda não tem uma conta?</p>
          <span>Cadastre-se</span>
        </LoginSignupLogin>

        <LoginSignupAgree>
          <input type="checkbox" />
          <p>
            Concordo com os{" "}
            <a href="https://my-portfolio-liart-one-93.vercel.app/">
              Termos de Uso
            </a>
          </p>
        </LoginSignupAgree>
      </LoginSignupContainer>
    </LoginSignupPage>
  );
};
