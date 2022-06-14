import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import ComprasCarouselItem from "./comprasCarouselItem";
import classes from "./comprasCarousel.module.css";
import leftArrow from "../../assets/chevron-left.png";
import rightArrow from "../../assets/chevron-right.png";

const getFilteredProducts = (products, filter) => {
  return products.filter((product) => filter === "todos" || product[filter]);
};

const ComprasCarousel = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef("");
  const searchParams = useSearchParams()[0];
  const currentFilter = searchParams.get("filter");

  const filteredProducts = getFilteredProducts(props.products, currentFilter);

  const scroll = (scrollOffset) => {
    carouselRef.current.scrollLeft += scrollOffset;
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

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
    <section
      className={`${classes.carouselSectionWrapper} ${
        isVisible && classes.carouselSectionWrapperFade
      }`}
    >
      <h1 className={classes.carouselTitle}>{props.name}</h1>
      <div className={classes.carouselItemsWrapper}>{content}</div>
    </section>
  );
};

export default ComprasCarousel;
