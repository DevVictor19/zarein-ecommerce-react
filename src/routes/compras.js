import { useState } from "react";
import ComprasCarousel from "../components/compras/comprasCarousel";
import ComprasMenu from "../components/compras/comprasMenu";

import { getProducts } from "../data";

const Compras = () => {
  const [showCarousel, setShowCarousel] = useState({
    firstRender: true,
    isVisible: false,
  });
  const products = getProducts();
  const shouldRender = showCarousel.firstRender || showCarousel.isVisible;

  const fadeEffectHandler = () => {
    setShowCarousel({
      firstRender: false,
      isVisible: false,
    });

    setTimeout(() => {
      setShowCarousel({
        firstRender: false,
        isVisible: true,
      });
    });
  };
  return (
    <>
      <ComprasMenu onClickMenu={fadeEffectHandler} />
      <main style={{ padding: "88px 64px 0" }}>
        {shouldRender &&
          products.map((product) => (
            <ComprasCarousel
              key={product.sectionName}
              name={product.sectionName}
              products={product.sectionProducts}
            />
          ))}
        {!shouldRender && <div style={{ height: "100vh" }}></div>}
      </main>
    </>
  );
};

export default Compras;
