import React, { useEffect } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../Redux/action";

import "./ProductCarousel.css";

const ProductCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 425 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  const dispatch = useDispatch();
  const productData = useSelector((store) => store.products);

  useEffect(() => {
    if (productData.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, productData.length]);

  const product = productData?.map((item) => (
    <Link to="" key={item.id}>
      <div className="__each__Product__">
        <div className="__each__imgage__">
          <img src={item.image} alt="product" />
        </div>
        <p className="__each__name__">{item.title}</p>
        <div className="__each__price_and_seemore__">
          <p className="__each__price__">
            Rent <br />
            <span>₹ {item.rental}</span>
          </p>
          <button>See more</button>
        </div>
      </div>
    </Link>
  ));

  return (
    <div>
      <div className="__outer_div_carousel__">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          itemClass="carousel-item-padding-40-px"
        >
          {product}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductCarousel;
