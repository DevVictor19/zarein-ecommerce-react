import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import ComprasCarousel from "../components/compras/comprasCarousel";
import ComprasMenu from "../components/compras/comprasMenu";
import FadeIn from "../components/UI/fadeIn";

import { getProducts } from "../data/products";

const Compras = () => {
  const products = getProducts();
  const searchParams = useSearchParams()[0];
  const [fadeCarosel, setFadeCarosel] = useState({
    firstRender: true,
    isVisible: false,
    currentFilter: "",
  });

  useEffect(() => {
    setFadeCarosel((s) => ({
      ...s,
      currentFilter: searchParams.get("filter"),
    }));
  }, [searchParams]);

  const animationStarts = fadeCarosel.firstRender || fadeCarosel.isVisible;

  const fadeEffectHandler = (filter) => {
    if (filter === fadeCarosel.currentFilter) {
      return;
    }

    // animacao de saida -> animationStarts deve ser false
    setFadeCarosel({
      firstRender: false,
      isVisible: false,
      currentFilter: filter,
    });

    // animacao de entrada -> animationStarts deve ser true
    setTimeout(() => {
      setFadeCarosel({
        firstRender: false,
        isVisible: true,
        currentFilter: filter,
      });
    }, 400);
  };
  return (
    <FadeIn>
      <ComprasMenu onClickMenu={fadeEffectHandler} />
      <main style={{ padding: "88px 64px 0" }}>
        {products.map((product) => (
          <ComprasCarousel
            key={product.sectionName}
            name={product.sectionName}
            products={product.sectionProducts}
            controlAnimation={animationStarts}
          />
        ))}
      </main>
    </FadeIn>
  );
};

export default Compras;
