import {
  DescriptionBoxContainer,
  DescriptionBoxDescription,
  DescriptionBoxNavBox,
  DescriptionBoxNavigation,
} from "./styles";

export const DescriptionBox = () => {
  return (
    <DescriptionBoxContainer>
      <DescriptionBoxNavigation>
        <DescriptionBoxNavBox>Descrição</DescriptionBoxNavBox>
        <DescriptionBoxNavBox className="fade">
          Avaliações (122)
        </DescriptionBoxNavBox>
      </DescriptionBoxNavigation>
      <DescriptionBoxDescription>
        <p>
          O Speedo LZR Pure Intent foi feito para atletas que buscam o máximo de
          performance. Com tecnologia de compressão e suporte, ele é ideal para
          competições de natação.
        </p>
      </DescriptionBoxDescription>
    </DescriptionBoxContainer>
  );
};
