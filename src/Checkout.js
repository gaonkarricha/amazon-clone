import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal.js";


function Checkout() {
  return (
    <div ClassName="Checkout">
        

    
    <div ClassName="checkout__left">
        < img ClassName='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""/>
        <div>
            <h2 ClassName="checkout__title">Your shopping basket</h2>
            {/*BasketItem*/}
            {/*BasketItem*/}
            {/*BasketItem*/}
            {/*BasketItem*/}

        </div>
    </div>

    <div ClassName="checkout__right">
        <Subtotal />
    </div>

    </div>
  )
}

export default Checkout;