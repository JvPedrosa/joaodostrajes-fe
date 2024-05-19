import { FooterContainer, FooterCopyright, FooterLinks } from "./styles";
import { Instagram, WhatsApp } from "@mui/icons-material";
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <a href="https://www.instagram.com/joaodostrajes/">
          <Instagram />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5583988802606&text=Ol%C3%A1!%20estou%20na%20loja%20Jo%C3%A3o%20dos%20Trajes%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.">
          <WhatsApp />
        </a>
      </FooterLinks>

      <FooterCopyright>
        <hr />

        <p>
          Desenvolvido por{" "}
          <a href="https://my-portfolio-liart-one-93.vercel.app/">
            João Victor Pedrosa
          </a>
        </p>
        <p>© 2024 Todos os direitos reservados</p>
      </FooterCopyright>
    </FooterContainer>
  );
};
