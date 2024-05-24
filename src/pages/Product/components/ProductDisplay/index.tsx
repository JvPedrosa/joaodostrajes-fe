import { StarBorder, StarRate } from "@mui/icons-material";
import { ItemProps } from "@/types";
import {
  ProductDisplayCategory,
  ProductDisplayContainer,
  ProductDisplayDescription,
  ProductDisplayImage,
  ProductDisplayImageList,
  ProductDisplayLeft,
  ProductDisplayPriceNew,
  ProductDisplayPriceOld,
  ProductDisplayPrices,
  ProductDisplayRight,
  ProductDisplaySize,
  ProductDisplaySizeList,
  ProductDisplayStars,
} from "./styles";

export const ProductDisplay = ({ product }: { product: ItemProps }) => {
  return (
    <ProductDisplayContainer>
      <ProductDisplayLeft>
        <ProductDisplayImageList>
          <img src={product.image} alt="Product" />
          <img src={product.image} alt="Product" />
          <img src={product.image} alt="Product" />
          <img src={product.image} alt="Product" />
        </ProductDisplayImageList>

        <ProductDisplayImage>
          <img src={product.image} alt="Product" />
        </ProductDisplayImage>
      </ProductDisplayLeft>

      <ProductDisplayRight>
        <h1>{product.name}</h1>
        <ProductDisplayStars>
          <StarRate />
          <StarRate />
          <StarRate />
          <StarRate />
          <StarBorder />
          <p>(122)</p>
        </ProductDisplayStars>

        <ProductDisplayPrices>
          <ProductDisplayPriceOld>
            <p>R$ {product.old_price.toFixed(2)}</p>
          </ProductDisplayPriceOld>
          <ProductDisplayPriceNew>
            <p>R$ {product.new_price.toFixed(2)}</p>
          </ProductDisplayPriceNew>
        </ProductDisplayPrices>

        <ProductDisplaySize>
          <h1>Selecione o tamanho</h1>
          <ProductDisplaySizeList>
            <div>22</div>
            <div>24</div>
            <div>26</div>
            <div>28</div>
          </ProductDisplaySizeList>
        </ProductDisplaySize>

        <button>Adicionar ao carrinho</button>

        <ProductDisplayDescription>
          O Speedo LZR Pure Intent foi feito para atletas que buscam o máximo de
          performance. Com tecnologia de compressão e suporte, ele é ideal para
          competições de natação.
        </ProductDisplayDescription>

        <ProductDisplayCategory>
          <span>Categoria: </span>
          Feminino, Trajes Tecnológicos
        </ProductDisplayCategory>
      </ProductDisplayRight>
    </ProductDisplayContainer>
  );
};
