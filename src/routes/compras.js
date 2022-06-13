import ComprasCarousel from "../components/compras/comprasCarousel";
import ComprasMenu from "../components/compras/comprasMenu";

import { getProducts } from "../data";

const Compras = () => {
  const products = getProducts();

  return (
    <>
      <ComprasMenu />
      <main style={{ padding: "88px 64px 0" }}>
        {products.map((product) => (
          <ComprasCarousel
            key={product.sectionName}
            name={product.sectionName}
            products={product.sectionProducts}
          />
        ))}
      </main>
    </>
  );
};

export default Compras;
