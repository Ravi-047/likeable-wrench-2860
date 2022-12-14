import axios from "axios";
import React from "react";

import "./CartProduct.css";

export const SingleProduct = ({ prdctImg, Name, price, deposite, id }) => {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/cart/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="fetchDiv">
        <div className="imgDiv">
          <img src={prdctImg} alt="PRoduct Img" />
        </div>
        <div className="infoDiv">
          <div className="namebtn">
            <p> {Name} </p>
            <img
              src="https://www.rentomojo.com/public/images/radical-cart/icons/delete__icon.svg"
              alt="delete"
              onClick={handleDelete}
            />
          </div>
          <br></br>
          <div className="price">
            <p>
              Installation <br></br> ₹1{" "}
            </p>
            <p>
              Rent <br></br> ₹{price}
            </p>
            <p>
              Deposite <br></br> ₹{deposite}
            </p>
          </div>
        </div>
      </div>
      <div className="Selector">
        <select className="selectTag">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <select className="selectTag">
          <option>1 Months</option>
          <option>2 Months</option>
          <option>3 Months</option>
        </select>
      </div>
    </div>
  );
};
