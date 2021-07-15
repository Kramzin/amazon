import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p> The lean startup </p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>🌟</p>
          <p>🌟</p>
        </div>
      </div>
      <img
        src="https://www.investopedia.com/thmb/eRKJOys7Ff9GRkgg3kW2uZXbNDo=/900x600/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-527398042-0aa90c3c871d4b98883700135c9013de.jpg"
        alt=""
      />

      <button> Add to Basket </button>
    </div>
  );
}

export default Product;
