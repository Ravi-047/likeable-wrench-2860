import React from "react";
import "./payment.css";
import chip from "./image/chip.png";
import visa from "./image/visa.png";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCarts } from "../../Redux/cart/action.cart";

export const Payment = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.dataCart.carts);

  const handleSubmit = (event) => {
    event.preventDefault();
    toast({
      position: "top",
      title: "Payment Successful.",
      description: "Thank You for Shoping with us",
      status: "success",
      duration: 4000,
      isClosable: true,
    });

    setTimeout(function () {
      navigate("/paymentsucess");
    }, 1000);

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].id);
      dispatch(deleteCarts(data[i].id));
    }
  };

  return (
    <div>
      <div className="container">
        <div className="card-container">
          <div className="front">
            <div className="image">
              <img src={chip} alt="" />
              <img src={visa} alt="" />
            </div>
            <div className="card-number-box">################</div>
            <div className="flexbox">
              <div className="box">
                <span>card holder</span>
                <div className="card-holder-name">full name</div>
              </div>
              <div className="box">
                <span>expires</span>
                <div className="expiration">
                  <span className="exp-month">mm</span>
                  <span className="exp-year">yy</span>
                </div>
              </div>
            </div>
          </div>

          <div className="back">
            <div className="stripe"></div>
            <div className="box">
              <span>cvv</span>
              <div className="cvv-box"></div>
              <img src="image/visa.png" alt="" />
            </div>
          </div>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <div className="inputBox">
            <span>card number</span>
            <input
              type="text"
              maxLength="16"
              className="card-number-input"
              required
            />
          </div>
          <div className="inputBox">
            <span>card holder</span>
            <input type="text" className="card-holder-input" required />
          </div>
          <div className="flexbox">
            <div className="inputBox">
              <span>expiration mm</span>
              <select name="" id="" className="month-input" required>
                <option value="">Month</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="inputBox">
              <span>expiration yy</span>
              <select name="" id="" className="year-input" required>
                <option value="">Year</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
            <div className="inputBox">
              <span>cvv</span>
              <input type="text" maxLength="4" className="cvv-input" required />
            </div>
          </div>
          <input type="submit" value="submit" className="submit-btn" />
        </form>
      </div>
    </div>
  );
};
