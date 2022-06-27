import React from "react";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

function Image({img, className})
{
	const {cartItems, toggle, addToCart, removeFromCart} = React.useContext(Context)
	const {isHovered, ref} = useHover()
	console.log(ref)
	const heartIcon = img.isFavorited ?
	<i onClick={()=> toggle(img.id)} className="ri-heart-fill favorite"></i> :
	isHovered && <i onClick={()=> toggle(img.id)} className="ri-heart-line favorite"></i> 

	const cartIcon = !cartItems.includes(img) ? 
	isHovered && <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i> 
	:  <i onClick={() => removeFromCart(img.id)} className="ri-shopping-cart-fill cart"></i>

	return (
		<div 
			className={`${className} image-container`}
			ref={ref}
			>
			<img alt="" src={img.url} className="image-grid"/>
			{heartIcon}
			{cartIcon}
		</div>
	)
}

export default Image