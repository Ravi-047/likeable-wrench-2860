import React from "react";
import styles from "./Footer.module.css";
import { MdKeyboardArrowRight, MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
const Footer = () => {
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
          <button className={styles.__read__more__}>
            Read More <MdKeyboardArrowRight />
          </button>

          <div className={styles.__site__info__}>
            <div>
              <h3>FIRSTRENTO</h3>
              <div>
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
              <h3>INFORMATION</h3>
              <div>
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
              <h3>POLICIES</h3>
              <div>
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
              <h3>NEED HELP ?</h3>
            </div>
          </div>

          <hr />

          <div className={styles.__social__}>
            <div>© 2022. Edunetwork Pvt. Ltd.</div>
            <div className={styles.__social__icons__}>
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaLinkedinIn />
              </span>
              <span>
                <FaYoutube />
              </span>
              <span>
                <ImInstagram />
              </span>
              <span>
                <FaDribbble />
              </span>
            </div>
            <div>
              Go Up <MdKeyboardArrowUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
