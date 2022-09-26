import {  faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, category, price, img, seller, ratings } = props.product;

 
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h4>{name} </h4>
        <p>Catagory : {category}</p>
        <p>Price : ${price}</p>
        <p>
          <small>Manufacturer : {seller}</small>
        </p>
        <p>
          <small>Ratings : {ratings}</small>
        </p>
      </div>
      <div>
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="btn-cart"
        >
          <p className="btn-text">Add to cart</p>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;
