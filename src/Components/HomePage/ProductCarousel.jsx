import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

import "./ProductCarousel.css";

const ProductCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
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

  const productData = [
    {
      id: 1,
      imageurl:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Colorful sneakers lkjlkjlkjlkjlkjlkjlj",
      price: "$19.99",
      description: "Some text about the product..",
    },
    {
      id: 2,
      imageurl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Sport sneakers",
      price: "$21.99",
      description: "Some text about the product..",
    },
    {
      id: 3,
      imageurl:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "iWatch",
      price: "$99.99",
      description: "Some text about the product..",
    },
    {
      id: 4,
      imageurl:
        "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Water Bottle",
      price: "$14.99",
      description: "Some text about the product..",
    },
    {
      id: 5,
      imageurl:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Vans sneakers",
      price: "$38.99",
      description: "Some text about the product..",
    },
    {
      id: 6,
      imageurl:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Coco Noir",
      price: "$149.99",
      description: "Some text about the product..",
    },
    {
      id: 7,
      imageurl:
        "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Sunglasses",
      price: "$38.99",
      description: "Some text about the product..",
    },
    {
      id: 8,
      imageurl:
        "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Dove cream",
      price: "$49.99",
      description: "Some text about the product..",
    },
  ];

  const product = productData?.map((item) => (
    <Link to="" key={item.id}>
      <div className="__each__Product__">
        <div className="__each__imgage__">
          <img src={item.imageurl} alt="product" />
        </div>
        <p className="__each__name__">{item.name}</p>
        <div className="__each__price_and_seemore__">
          <p className="__each__price__">
            Rent <br />
            <span>₹ {item.price}</span>
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
