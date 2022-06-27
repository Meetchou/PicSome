import React from "react"

const Context = React.createContext()

function ContextProvider (props)
{
	const [allPhotos, setAllPhotos] = React.useState([])
	const [cartItems, setCartItems] = React.useState([])

	const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    React.useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

	function toggle(id)
	{
		setAllPhotos(photos => photos.map(photo => {
			return photo.id === id ?
				{...photo, isFavorited: !photo.isFavorited}
				: photo
		}))
	}

	function addToCart(newItem)
	{
			setCartItems(items =>
				[...items, newItem]
			)
		console.log(newItem)
	}

	function removeFromCart(id)
	{
		setCartItems(items => items.filter((item) =>
				item.id !== id
			)
		)
	}

	function deleteCart() {
		setCartItems([])
	}

	return (
		<Context.Provider value={{allPhotos, toggle, cartItems, addToCart, removeFromCart, deleteCart}}>
			{props.children}
		</Context.Provider>
	)
}

export {ContextProvider, Context}