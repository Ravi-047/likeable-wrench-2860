import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import subsData from "./SubscriberData";
import "./Subscriber.css";

const Subscriber = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 425 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  const sub_Data = subsData?.map((item) => (
    <div key={item.id} className="__each__subscriber__">
      <div className="__subs__underQuotes__">{item.icon}</div>
      <div className="__profile__name__subs">
        <div className="__subs__profile__">
          <img src={item.image} alt="profile" />
        </div>
        <p>{item.name}</p>
      </div>
      <p className="__subs__dis__">{item.dis}</p>
    </div>
  ));

  return (
    <div>
      <div className="__subscriber__slider__">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          itemClass="carousel-item-padding-40-px"
        >
          {sub_Data}
        </Carousel>
      </div>
    </div>
  );
};

export default Subscriber;
