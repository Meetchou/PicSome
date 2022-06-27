import React from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
	
	const [isOrdered, setIsOrdered] = React.useState(false)
	const {cartItems, deleteCart} = React.useContext(Context)

	function placeOrder()
	{
		setIsOrdered(false)
		deleteCart()
		console.log("ordered")
	}

	React.useEffect(() => {
		if (isOrdered)
		{
			setTimeout(placeOrder, 3000)
		}
	}, [isOrdered])

	const cartItemElements = cartItems.map((item) =>
		<CartItem key={item.id} item={item}/>
	)

	const orderButton = !isOrdered ? <button onClick={() => setIsOrdered(true)} >Place Order</button>
	: <button>Ordering...</button>

    return (
        <main className="cart-page">
            {cartItemElements}
			<p className="total-cost">Total: {(cartItems.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            <div className="order-button">
				{
					cartItems.length !== 0 && orderButton
				}
            </div>
        </main>
    )
}

export default Cart