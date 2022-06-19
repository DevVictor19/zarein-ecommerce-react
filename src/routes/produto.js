import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { getProductsById } from "../data/products";
import ProdutosMenu from "../components/produto/produtoMenu";
import ProdutosOrder from "../components/produto/produtoOrder";
import FadeInMain from "../components/UI/fadeInMain";

const Produto = () => {
  const { productID } = useParams();
  const product = getProductsById(productID);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProdutosMenu productName={product.name} />
      <FadeInMain style={{ padding: "56px 64px 108px" }}>
        <ProdutosOrder
          name={product.name}
          description={product.description}
          img={product.img}
          price={product.price}
          sizes={product.sizes}
          id={product.id}
        />
      </FadeInMain>
    </>
  );
};

export default Produto;
