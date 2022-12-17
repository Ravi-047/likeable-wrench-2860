import React from "react";

import "./CartProduct.css"

export const SingleProduct = () => {
    return ( 
        <div>
            <div className="fetchDiv">
                <div className="imgDiv">
                    <img src="https://p.rmjo.in/productSquare/bbqhhykq-500x500.jpg" alt="PRoduct Img" />
                </div>
                <div className="infoDiv">
                    <div className="name&btn">
                        <p></p>
                        <img src="https://www.rentomojo.com/public/images/radical-cart/icons/delete__icon.svg" alt="delete" />
                    </div>
                    <div className="price">
                        <p>Installation <br></br> ₹1 </p>
                        <p>Rent <br></br> ₹1</p>
                        <p>Deposite <br></br> ₹1</p>
                    </div>

                </div>
            </div>
            <div className="Selector">
                <select className="selectTag" >
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
        </div >
    )
}