import React from "react";
import dummyImg from "../../assets/naruto.jpeg";
import "./ProductDetail.scss";

function ProductDetail() {
  return (
    <div className="ProductDetail">
      <div className="container">
        <div className="product-layout">
          <div className="product-img center">
            <img src={dummyImg} alt="" />
          </div>
          <div className="product-info">
            <h1 className="heading">This is the Title , Wall Poster</h1>
            <h3 className="price">$ 549</h3>
            <p className="description">
              One of the best and most obvious benefits of comic books is that
              they can be more fun and easier to read than regular books. This
              can be extremely appealing to young children who would otherwise
              have little interest in reading traditional forms of books
            </p>
            <div className="cart-options">
              <div className="quantity-selector">
                <span className="btn decrement">-</span>
                <span className="quantity">3</span>
                <span className="btn increment">+</span>
              </div>
              <button className="btn-primary add-to-cart">Add to Cart </button>
            </div>

            <div className="return-policy">
              <ul>
                <li>
                  This product is made to order and is typically printed in 3-6
                  working days. Your entire order will ship out together.
                </li>
                <li>
                  Since this product is printed on demand especially for you, it
                  is not eligible for cancellations and returns. Read our Return
                  Policy.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
