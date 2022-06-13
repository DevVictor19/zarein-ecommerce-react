import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

import ComprasCarouselItem from "./comprasCarouselItem";
import classes from "./comprasCarousel.module.css";
import leftArrow from "../../assets/chevron-left.png";
import rightArrow from "../../assets/chevron-right.png";

const getPopulares = (products) => {
  return products.filter((product) => product.populares);
};

const getPromocao = (products) => {
  return products.filter((product) => product.promocao);
};

const ComprasCarousel = (props) => {
  const carouselRef = useRef(null);
  const searchParams = useSearchParams()[0];
  const currentFilter = searchParams.get("filter");

  let filteredProducts = [...props.products];

  switch (currentFilter) {
    case "promocao":
      filteredProducts = getPromocao(filteredProducts);
      break;
    case "populares":
      filteredProducts = getPopulares(filteredProducts);
      break;
    default:
      break;
  }

  const scroll = (scrollOffset) => {
    carouselRef.current.scrollLeft += scrollOffset;
  };

  let content = (
    <>
      <div className={classes.carouselItems} ref={carouselRef}>
        {filteredProducts.map((item) => (
          <ComprasCarouselItem key={item.id} item={item} />
        ))}
      </div>
      <div
        className={`${classes.bar} ${classes.left}`}
        onClick={() => scroll(-308)}
      >
        <img src={leftArrow} alt="left arrow" />
      </div>
      <div
        className={`${classes.bar} ${classes.right}`}
        onClick={() => scroll(308)}
      >
        <img src={rightArrow} alt="right arrow" />
      </div>{" "}
    </>
  );

  if (filteredProducts.length === 0) {
    content = (
      <div className={classes.carouselEmpty}>
        <h2>Sem produtos por enquanto</h2>
      </div>
    );
  }

  return (
    <section className={classes.carouselSectionWrapper}>
      <h1 className={classes.carouselTitle}>{props.name}</h1>
      <div className={classes.carouselItemsWrapper}>{content}</div>
    </section>
  );
};

export default ComprasCarousel;
