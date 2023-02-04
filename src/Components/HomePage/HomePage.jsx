import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./HomePage.module.css";
import "./Carousel.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import img1 from "../../Assets/carouselImage/bangalore.gif";
import img2 from "../../Assets/carouselImage/fitness.jpg";
import img3 from "../../Assets/carouselImage/ac.jpg";
import img4 from "../../Assets/carouselImage/paytm.jpg";

// icons
import covid_icon from "../../Assets/carouselImage/protection.png";
import { Link } from "react-router-dom";
import ProductCarousel from "./ProductCarousel";

import MoreData from "./MoreRent";
import Subscriber from "./Subscriber";
import { CityContext } from "../../Context/CityContext";

const category_arr = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 18 18"
        id="new-packages"
        y="806"
      >
        <g fill="none" fillRule="evenodd" stroke="#434A54" strokeWidth=".4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6.114L8.991 3.5l4.992 2.614v.345L8.99 9.073 4 6.467z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6.45l4.991 2.638 4.992-2.639v5.432l-5.007 2.614L4 11.88z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.991 14.315V9.088L4.031 6.51 4 6.662v5.219z"
          />
          <path
            fill="#4DDFD2"
            d="M5.75 5.22l5.137 2.862 1.02-.54-5.289-2.793z"
          />
          <path
            fill="#4DDFD2"
            d="M10.75 8.153l1.05-.567-.036 1.684-.408-.056-.606.444V8.153z"
          />
        </g>
      </svg>
    ),
    name: "Packages",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 18 18"
        id="new-furniture"
        y="742"
      >
        <g fill="none" fillRule="evenodd">
          <path
            stroke="#434A54"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth=".4"
            d="M12.348 5.191H5.433c-.695 0-1.259.548-1.259 1.225v1.58h9.432v-1.58c0-.677-.563-1.225-1.258-1.225z"
          />
          <path
            fill="#4DDFD2"
            d="M8.984 9.456v-.802c0-.7-.582-1.266-1.3-1.266H5.266c-.718 0-1.3.566-1.3 1.266v.802"
          />
          <path
            stroke="#434A54"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth=".4"
            d="M8.984 9.456v-.802c0-.7-.582-1.266-1.3-1.266H5.266c-.718 0-1.3.566-1.3 1.266v.802"
          />
          <path
            fill="#4DDFD2"
            d="M14.013 9.456v-.802c0-.7-.583-1.266-1.302-1.266h-2.415c-.719 0-1.302.566-1.302 1.266v.802"
          />
          <path
            stroke="#434A54"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth=".4"
            d="M14.013 9.456v-.802c0-.7-.583-1.266-1.302-1.266h-2.415c-.719 0-1.302.566-1.302 1.266v.802m5.008 3.244H3.778a.593.593 0 01-.6-.584v-2.63h11.425v2.63a.592.592 0 01-.6.585z"
          />
        </g>
      </svg>
    ),
    name: "Furniture",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 18 18"
        id="new-appliances"
        y="550"
      >
        <g fill="none" fillRule="evenodd">
          <path
            stroke="#434A54"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth=".4"
            d="M12.646 14.124h-7.25a.172.172 0 01-.176-.168V4.393c0-.093.079-.168.176-.168h7.25c.097 0 .176.075.176.168v9.563a.172.172 0 01-.176.168zM5.22 5.79h7.601"
          />
          <path
            fill="#4DDFD2"
            d="M10.303 9.914c0 .678-.574 1.227-1.282 1.227-.709 0-1.283-.549-1.283-1.227s.574-1.227 1.283-1.227c.708 0 1.282.55 1.282 1.227"
          />
          <path
            stroke="#434A54"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth=".4"
            d="M10.303 9.914c0 .678-.574 1.227-1.282 1.227-.709 0-1.283-.549-1.283-1.227s.574-1.227 1.283-1.227c.708 0 1.282.55 1.282 1.227z"
          />
          <path
            fill="#434A54"
            d="M6.43 14.638h-.362a.178.178 0 01-.182-.174v-.109c0-.095.082-.173.182-.173h.363c.1 0 .181.078.181.173v.11a.178.178 0 01-.181.173m5.623.044h-.333a.193.193 0 01-.197-.188v-.124c0-.104.088-.188.197-.188h.333c.108 0 .196.084.196.188v.124a.193.193 0 01-.196.188"
          />
        </g>
      </svg>
    ),
    name: "Appliances",
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 18 18"
        id="new-electronics"
        y="614"
      >
        <g fill="none" fillRule="evenodd" stroke="#434A54" strokeWidth=".4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.092 14.193H6.958c-.462 0-.837-.362-.837-.808V4.563c0-.447.375-.808.837-.808h4.134c.462 0 .837.361.837.808v8.822c0 .446-.375.808-.837.808z"
          />
          <path
            fill="#4DDFD2"
            d="M9.377 12.84c0 .187-.157.34-.352.34a.346.346 0 01-.352-.34c0-.188.157-.34.352-.34.195 0 .352.152.352.34"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="bevel"
            d="M8.228 3.946h1.795"
          />
        </g>
      </svg>
    ),
    name: "Electronics",
  },
  {
    id: 5,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        id="new-fitness"
        y="678"
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="#434A54"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.544"
          transform="translate(13.534 14.324)"
        >
          <path d="M28.648 7.162l-1.79 14.324M6.088 9.694l2.865 8.211" />
          <path
            fill="#FFF"
            d="M34.271 24.313a5.388 5.388 0 013.582 5.077c0 2.974-2.873 5.385-5.848 5.385l-23.918-.07C3.528 34.14 0 30.254 0 25.543c0-5.124 4.159-9.233 9.232-9.233 2.55 0 3.022.652 14.878 4.544l10.161 3.46zM26.59 8.154a1.537 1.537 0 01.03-3.076h4.616v-3.54a1.54 1.54 0 013.078 0v3.54c0 1.7-1.378 3.077-3.078 3.077H26.59z"
          />
          <circle cx="28.648" cy="28.648" r="1.791" fill="#FFF" />
          <path
            fill="#4DDFD2"
            d="M12.108 5.557a2.083 2.083 0 01-.342 4.137H2.823a2.823 2.823 0 01-.006-5.646c.419 0 .062-.016 9.291 1.51z"
          />
          <circle cx="9.098" cy="25.604" r="4.476" fill="#4DDFD2" />
          <path d="M8.953 25.067l5.73 5.372h7.161" />
        </g>
      </svg>
    ),
    name: "Fitness",
  },
  {
    id: 6,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 18 18"
        id="wfh-essentials"
        y="1145"
      >
        <g fill="none" fillRule="evenodd">
          <g stroke="#434A54" strokeLinecap="round" strokeWidth=".4">
            <path d="M10.438 6.979H5.925V4.382a.26.26 0 01.26-.26h3.993a.26.26 0 01.26.26V6.98z" />
            <path d="M10.835 7.831H5.528V7.06c0-.08.072-.145.162-.145h4.984c.09 0 .161.065.161.145v.771h0z" />
          </g>
          <path
            d="M5.075 13.594h-.571a.08.08 0 01-.082-.077V8.4h.734v5.117a.08.08 0 01-.081.077zM5.222 8.454h5.806v2.75H5.222zM11.028 8.705h3.36v2.445h-3.36z"
            stroke="#434A54"
            strokeWidth=".4"
            strokeLinecap="round"
          />
          <path
            d="M12.867 10.08h-.317a.15.15 0 01-.147-.153.15.15 0 01.147-.152h.317a.15.15 0 01.147.152.15.15 0 01-.147.153z"
            fill="#434A54"
            fillRule="nonzero"
          />
          <path
            d="M11.028 11.15h3.36v2.139a.306.306 0 01-.305.305h-2.75a.306.306 0 01-.305-.305v-2.14h0z"
            stroke="#434A54"
            strokeWidth=".4"
            strokeLinecap="round"
          />
          <path
            d="M12.867 12.525h-.317a.15.15 0 01-.147-.153.15.15 0 01.147-.153h.317a.15.15 0 01.147.153.15.15 0 01-.147.153z"
            fill="#434A54"
            fillRule="nonzero"
          />
          <path
            d="M14.876 8.694H4.109a.106.106 0 01-.106-.106v-.737c0-.058.047-.106.106-.106h10.767c.058 0 .105.048.105.106v.737a.106.106 0 01-.105.106z"
            stroke="#434A54"
            strokeWidth=".4"
            fill="#4DDFD2"
          />
        </g>
      </svg>
    ),
    name: "WFH Essentials",
  },
];

const HomePage = () => {
  const { city } = useContext(CityContext);
  const slide = [img1, img2, img3, img4];

  return (
    <div>
      <div className={styles.outer_slider}>
        <div className={styles.img_slider}>
          <Carousel autoPlay infiniteLoop>
            {slide.map((item, i) => (
              <img key={i} src={item} alt="img_slide" />
            ))}
          </Carousel>
          <div className={styles.covid_19_saftey}>
            <span>
              <img src={covid_icon} alt="covid" />
            </span>
            <span className={styles.covid_sen}>
              Safety precautions during COVID-19. We’re taking additional steps
              and precautionary measures to protect our community from COVID-19.
            </span>
            <Link>
              <span className={styles.knowmore}>
                Know more <IoIosArrowDroprightCircle />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.allCategoty}>
        {category_arr.map(({ id, icon, name }) => (
          <div
            title={
              name === "Furniture"
                ? "Click to Check the Furniture Product"
                : "No Product, we are scaling our inventory"
            }
          >
            <Link
              to={`/${city}/${name}`}
              key={id}
              className={
                name === "Furniture"
                  ? styles.__furniture__
                  : styles.eachCategory
              }
            >
              <div>{icon}</div>
              <p>{name}</p>
            </Link>
          </div>
        ))}
      </div>

      {/* productCarousel  */}
      <div className={styles.fullProduct_section}>
        <div className={styles.productTitle__des}>
          <p className={styles.title__des}>
            You'll love to <span>take these home</span>
          </p>
          <div></div>
        </div>
        <div className={styles.product_Carousel}>
          <ProductCarousel />
        </div>
      </div>

      {/* there's more thins  */}
      <div className={styles.__moreThingsRent__}>
        <p className={styles.title__des}>
          There's more <span>to renting</span>
        </p>
        <div></div>
        <div className={styles.__more_rent__}>
          {MoreData?.map((item) => (
            <div key={item.id} className={styles.each__more__rent}>
              {item.icons}
              <p>{item.title}</p>
              <p>{item.discription}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Link to="" className={styles.__knowMore__}>
          KNOW MORE
        </Link>
      </div>

      {/* happy subscriber  */}
      <div className={styles.__main__subs__}>
        <div className={styles.happy__subscriber}>
          <p className={styles.title__des}>
            Over 1.5 lac <span>happy subscribers</span>
          </p>
          <div></div>
          <p className={styles.__happy__dis}>
            Here's what they have to say about their FirstRent experience.
          </p>
          <div>
            <Subscriber />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
