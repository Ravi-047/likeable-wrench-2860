import React, { useState } from "react";
import styles from "./Footer.module.css";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { IoIosPaperPlane } from "react-icons/io";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import android from "../../Assets/android.png";
import ios from "../../Assets/ios.png";

const Footer = () => {
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);

  const handleClick1 = () => {
    setClick1(!click1);
  };
  const handleClick2 = () => {
    setClick2(!click2);
  };
  const handleClick3 = () => {
    setClick3(!click3);
  };
  const handleClick4 = () => {
    setClick4(!click4);
  };

  const goToUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className={styles.___main__footer__}>
        <div className={styles.__footer__main__content__}>
          <h3>
            Enjoy An Upgraded Lifestyle In Bangalore City On A Budget With
            FirstRento!
          </h3>

          <p>
            RentoMojo is a leading rental company with a pan-India presence. We
            offer furniture, appliances, and electronics on rent in Bangalore at
            an affordable monthly fee. When you choose to rent from us instead
            of buying from a store, you get to use the best products in the
            market and still save money!
          </p>

          <p>
            Whether you have a home in Bangalore or have just rented a room
            here, you’ll find everything you need on our website. We offer
            top-quality furniture, appliances, and electronics, made by the most
            dependable, in-demand brands around. If you choose to rent from us,
            you will receive multiple rewards like free maintenance, free
            relocation, and damage waiver.
          </p>

          <p>
            RentoMojo makes it effortless for you to rent from us. All you need
            to do is pick out the products you like, add them to your cart, and
            then check out. Our team will deliver your rental items directly to
            your home and also install them for you. We offer fast delivery to
            all parts of Bangalore, including locations such as Bangalore
            Bazaar, Malleswaram, Doorvavinagar, Bangalore Sub Foreign Post, and
            Agara.
          </p>
          <div></div>
          {/* <button className={styles.__read__more__}>
            Read More <MdKeyboardArrowRight />
          </button> */}

          <div className={styles.__site__info__}>
            <div>
              <h3 onClick={handleClick1}>
                FIRSTRENTO
                {click1 ? (
                  <span>
                    <BsFillCaretUpFill />
                  </span>
                ) : (
                  <span>
                    <BsFillCaretDownFill />
                  </span>
                )}
              </h3>

              <div
                className={
                  click1
                    ? `${styles.__site_details__} ${styles.active}`
                    : `${styles.__site_details__}`
                }
              >
                <Link to="">
                  <p>About US</p>
                </Link>
                <Link to="">
                  <p>Culture</p>
                </Link>
                <Link to="">
                  <p>Investors</p>
                </Link>
                <Link to="">
                  <p>Careers</p>
                </Link>
                <Link to="">
                  {" "}
                  <p>Contact</p>
                </Link>
                <Link to="">
                  <p>Our Benefits</p>
                </Link>
                <Link to="">
                  <p>Sitemap</p>
                </Link>
              </div>
            </div>

            <div>
              <h3 onClick={handleClick2}>
                INFORMATION
                {click2 ? (
                  <span>
                    <BsFillCaretUpFill />
                  </span>
                ) : (
                  <span>
                    <BsFillCaretDownFill />
                  </span>
                )}
              </h3>
              <div
                className={
                  click2
                    ? `${styles.__site_details__} ${styles.active}`
                    : `${styles.__site_details__}`
                }
              >
                <Link to="">
                  <p>Blog</p>
                </Link>
                <Link to="">
                  <p>FAQs</p>
                </Link>
                <Link to="">
                  <p>Documents Required</p>
                </Link>
              </div>
            </div>

            <div>
              <h3 onClick={handleClick3}>
                POLICIES
                {click3 ? (
                  <span>
                    <BsFillCaretUpFill />
                  </span>
                ) : (
                  <span>
                    <BsFillCaretDownFill />
                  </span>
                )}
              </h3>
              <div
                className={
                  click3
                    ? `${styles.__site_details__} ${styles.active}`
                    : `${styles.__site_details__}`
                }
              >
                <Link to="">
                  <p>Shipping Policy</p>
                </Link>
                <Link to="">
                  <p>Cancellation & Return</p>
                </Link>
                <Link to="">
                  <p>Privacy Policy</p>
                </Link>
                <Link to="">
                  <p>Rental Terms & Conditions</p>
                </Link>
                <Link to="">
                  {" "}
                  <p>Referral Terms & Conditions</p>
                </Link>
              </div>
            </div>

            <div>
              <h3 onClick={handleClick4}>
                NEED HELP ?
                {click4 ? (
                  <span>
                    <BsFillCaretUpFill />
                  </span>
                ) : (
                  <span>
                    <BsFillCaretDownFill />
                  </span>
                )}
              </h3>
              <div
                className={
                  click4
                    ? `${styles.__site_details__} ${styles.active}`
                    : `${styles.__site_details__}`
                }
              >
                <div className={styles.chat__option}>
                  <button>Chat with us (9AM - 6PM)</button>
                </div>
                <div className={styles.__mail_rento__}>
                  <a
                    href="mailto:rento@firstrento.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoIosPaperPlane /> rento@firstrento.com
                  </a>
                </div>
                <h3>DOWNLOAD APP</h3>
                <div className={styles.__store_anios}>
                  <div>
                    <img src={android} alt="android" />
                  </div>
                  <div>
                    <img src={ios} alt="ios" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className={styles.__social__}>
            <div>© 2022. Edunetwork Pvt. Ltd.</div>
            <div className={styles.__social__icons__}>
              <span>
                <a
                  target="_blank"
                  href="https://www.facebook.com/rentomojo"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://twitter.com/rentomojo"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/rentomojo/"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://www.youtube.com/c/RentomojoOfficial"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://www.instagram.com/rentomojo/"
                  rel="noreferrer"
                >
                  <ImInstagram />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://dribbble.com/RentoMojo"
                  rel="noreferrer"
                >
                  <FaDribbble />
                </a>
              </span>
            </div>
            <div>
              <button onClick={goToUp}>
                Go Up <MdKeyboardArrowUp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
