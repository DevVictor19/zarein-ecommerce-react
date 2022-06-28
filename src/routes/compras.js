import { useState } from "react";

import ComprasCarousel from "../components/compras/comprasCarousel";
import ComprasMenu from "../components/compras/comprasMenu";
import FadeInMain from "../components/UI/fadeInMain";
import { getProducts } from "../data/products";

const Compras = () => {
  const products = getProducts();
  const [currentFilter, setCurrentFilter] = useState("todos");
  const [firstRender, setFirstRender] = useState(true);

  //style={{ padding: "88px 64px 0" }}

  const onClickFilterLink = (filter) => {
    if (filter === currentFilter) {
      return;
    }

    setFirstRender(false);
    setCurrentFilter(filter);
  };

  return (
    <>
      <ComprasMenu onClickMenu={onClickFilterLink} />
      <FadeInMain>
        {products.map((product) => (
          <ComprasCarousel
            key={product.sectionName}
            name={product.sectionName}
            products={product.sectionProducts}
            filter={currentFilter}
            isFirstRender={firstRender}
          />
        ))}
      </FadeInMain>
    </>
  );
};

export default Compras;
