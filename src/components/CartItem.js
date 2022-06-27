import React from "react";
import { Context } from "../Context";

function CartItem({item}) {
	
	const { removeFromCart } = React.useContext(Context)

	return (
		<div className="cart-item">
            <i onClick={() => removeFromCart(item.id)} className="ri-delete-bin-line"></i>
            <img alt="" src={item.url} width="130px" />
            <p>{5.99.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
        </div>
	)
}

export default CartItem