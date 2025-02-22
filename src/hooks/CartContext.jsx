import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
	const [cartProducts, setCartproducts] = useState([]);

	const putProductInCart = (product) => {};
	const clearCart = (product) => {};
	const deleteProduct = (product) => {};
	const increaseProduct = (productid) => {};
	const decreaseProduct = (productid) => {};

	return (
		<CartContext.Provider
			value={{
				cartProducts,
				clearCart,
				putProductInCart,
				increaseProduct,
				decreaseProduct,
				deleteProduct,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const seCrt = () => {
	const context = useContext(CartContext);

	if (!context) {
		throw new Error('useCart must be with a context');
	}
	return context;
};
