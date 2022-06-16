import { useRef, useState, useEffect } from "react";
import { Transition } from "react-transition-group";

import ComprasCarouselItem from "./comprasCarouselItem";
import classes from "./comprasCarousel.module.css";
import leftArrow from "../../assets/chevron-left.png";
import rightArrow from "../../assets/chevron-right.png";

const getFilteredProducts = (products, filter) => {
  return products.filter((product) => filter === "todos" || product[filter]);
};

const duration = 600;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const ComprasCarousel = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef("");

  const { filter, products, isFirstRender } = props;

  const [currentProducts, setCurrentProducts] = useState(
    getFilteredProducts(products, filter)
  );

  console.log("render");

  useEffect(() => {
    if (isFirstRender) {
      setIsVisible(true);
      return;
    }
    setIsVisible(false);

    const fadeInUpdatedProducts = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => {
        setCurrentProducts(getFilteredProducts(products, filter));
      }, 400);
    }, 600);

    return () => {
      clearTimeout(fadeInUpdatedProducts);
    };
  }, [filter, isFirstRender, products]);

  const scroll = (scrollOffset) => {
    carouselRef.current.scrollLeft += scrollOffset;
  };

  let content = (
    <>
      <div className={classes.carouselItems} ref={carouselRef}>
        {currentProducts.map((item) => (
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

  if (currentProducts.length === 0) {
    content = (
      <div className={classes.carouselEmpty}>
        <h2>Sem produtos por enquanto</h2>
      </div>
    );
  }

  return (
    <Transition in={isVisible} timeout={duration}>
      {(state) => (
        <section className={classes.carouselSectionWrapper}>
          <h1 className={classes.carouselTitle}>{props.name}</h1>
          <div
            className={classes.carouselItemsWrapper}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {content}
          </div>
        </section>
      )}
    </Transition>
  );
};

export default ComprasCarousel;
