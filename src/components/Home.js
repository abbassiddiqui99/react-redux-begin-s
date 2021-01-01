import React from "react";

const Home = (props) => {
  console.log("home props", props);
  return (
    <div>
      {/* <div className="add-to-cart">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
      </div>
      <span className="cart-count">{props.data.length}</span> */}
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ price: 1000, name: "IphoneX" });
            }}
          >
            Add To Cart
          </button>
          <button
            onClick={() => {
              props.removeToCartHandler();
            }}
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
