import React, { useEffect, useState } from "react";
import { getDatabaseCart, removeFromDatabaseCart } from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart"
import './Review.css'
import { useHistory } from "react-router-dom";
const Review = () => {
  const [cart, setCart] = useState([]);
  const history=useHistory();
  useEffect(() => {
    const restoreCartData = getDatabaseCart();
    console.log(restoreCartData);
    const productKeys = Object.keys(restoreCartData);
    console.log(productKeys);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((productItem) => productItem.key === key);
      product.quantity = restoreCartData[key];
      return product;
    });

    console.log(cartProducts);
    setCart(cartProducts);
  },
  
  
  []);

  // =================================> Product Remove from Review Page <===========================================
  
  const removeProduct=(removeProductKey)=>{
    console.log('Clicked Done',removeProductKey);
   const newCart=cart.filter((prodItem)=>(prodItem.key !==removeProductKey)) //filter diye check kore "not equal to" diye remove kore dilam
   console.log(newCart); 
   setCart(newCart); // button a click korle product review page theke remove hoye jabe
   removeFromDatabaseCart(removeProductKey);
  //localStorage thekeo remove na korle page refresh korle abar cole asbe ...tai "removeFromDatabaseCart" a "removeProductKey" k pathiye dibo 
  }

const handleProceedCheckOut = ()=>{
    history.push('/shipment')
}



  return (
    <div className="review__container">
        <div className="selected__product__container">
        {/* <h1>This is Review</h1> */}
        {/* <h2>Cart Items:{cart.length}</h2> */}
        {cart.map((productItem)=><ReviewItem removeSelectedProduct={removeProduct}  productId={productItem} ></ReviewItem>)}

        </div>
    <div>
        {/* <ReviewCardItem/> */}
        <Cart cart={cart}>
            <button type="button" onClick={handleProceedCheckOut} class="btn btn-warning">Proceed Checkout</button>
        </Cart>
    </div>
    </div>  

  );
};

export default Review;
