import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Transition } from "react-transition-group";

import ComprasCarouselItem from "./comprasCarouselItem";
import classes from "./comprasCarousel.module.css";
import leftArrow from "../../assets/chevron-left.png";
import rightArrow from "../../assets/chevron-right.png";

const getFilteredProducts = (products, filter) => {
  return products.filter((product) => filter === "todos" || product[filter]);
};

const ComprasCarousel = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const { controlAnimation, products: currentProducts } = props;
  const carouselRef = useRef("");
  const searchParams = useSearchParams()[0];
  const currentFilter = searchParams.get("filter");
  const [products, setProducts] = useState(
    getFilteredProducts(currentProducts, currentFilter)
  );

  const defaultStyle = {
    transition: `opacity 0.6s ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  useEffect(() => {
    setIsVisible(controlAnimation);
    const timeout = setTimeout(() => {
      setProducts(getFilteredProducts(currentProducts, currentFilter));
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [controlAnimation, currentFilter, currentProducts]);

  const scroll = (scrollOffset) => {
    carouselRef.current.scrollLeft += scrollOffset;
  };

  let content = (
    <>
      <div className={classes.carouselItems} ref={carouselRef}>
        {products.map((item) => (
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

  if (products.length === 0) {
    content = (
      <div className={classes.carouselEmpty}>
        <h2>Sem produtos por enquanto</h2>
      </div>
    );
  }

  return (
    <Transition
      in={isVisible}
      timeout={{
        exit: 100,
        enter: 500,
      }}
    >
      {(state) => (
        <section
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          className={classes.carouselSectionWrapper}
        >
          <h1 className={classes.carouselTitle}>{props.name}</h1>
          <div className={classes.carouselItemsWrapper}>{content}</div>
        </section>
      )}
    </Transition>
  );
};

export default ComprasCarousel;
