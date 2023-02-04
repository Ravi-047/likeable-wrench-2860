import React, { useContext, useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CityContext } from "../../Context/CityContext";
import { getCarts } from "../../Redux/cart/action.cart";
import { getProducts } from "../../Redux/furniture/action";

import "./ProductCarousel.css";

const ProductCarousel = () => {
  const { city } = useContext(CityContext);
  const [loading, setLoading] = useState(false);
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
  const productData = useSelector((store) => store.furniture.products);

  useEffect(() => {
    setLoading(true);
    if (productData.length === 0) {
      dispatch(getProducts());
    }
    dispatch(getCarts());
    setLoading(false);
  }, [dispatch, productData.length]);

  const product = productData?.map((item) => (
    <Link to={`/${city}/Furniture/${item.title}/${item.id}`} key={item.id}>
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

  if (loading) {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "25px",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          Loading...
        </h1>
      </div>
    );
  } else {
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
  }
};

export default ProductCarousel;
